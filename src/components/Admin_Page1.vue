<template>
  <div id="Admin_Page1">
    <h1>비콘 설정 및 관리</h1>
    <!-- 비콘 설정 및 관리에서 버튼 반복 -->
    <div id="menubar">
      <v-btn
        v-for="item in componentsArray"
        :key="item"
        @click="swapComponent(item)"
      >
        {{ item }}</v-btn
      >
    </div>

    <!-- 비콘을 설정할 수 있는 지도 표시 -->
    <div id="GoogleMap">
      <GoogleMap :handelOnClick="eventOn" />
    </div>

    <!-- 비콘에 대해 추가, 삭제, 이상 비콘 확인  -->
    <div v-switch="component" id="beacon_Info_wrap">
      <div v-case="'비콘 추가 및 삭제'">
        <Beacon_Control />
      </div>
      <div v-case="'비콘 정보 및 신호 불량 비콘 확인'">
        <Beacon_Info />
      </div>
    </div>

    <div v-switch="component">
      <div v-case="'비콘 추가 및 삭제'">
        <Beacon_Info_Input id="beacon_input" />
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap/GoogleMap";
import Beacon_Info from "./Beacon/Beacon_Info";
import Beacon_Control from "./Beacon/Beacon_Control";
import Beacon_Info_Input from "./Beacon/Beacon_Info_Input";
import axios from "axios";
import io from "socket.io-client";

export default {
  components: {
    GoogleMap,
    Beacon_Info,
    Beacon_Control,
    Beacon_Info_Input,
  },
  props: ["handelOnClick"],
  data() {
    return {
      eventOn: false,
      // 소켓 서버 접속
      socket: io("http://172.26.2.137:3000/"),
      // socket: io("http://192.168.0.32:3000/"),
      component: "비콘 추가 및 삭제",
      componentsArray: [
        "비콘 추가 및 삭제",
        "비콘 정보 및 신호 불량 비콘 확인",
      ],
      beaconImage:
        "https://user-images.githubusercontent.com/53847348/99767420-5ba24b80-2b46-11eb-8b3c-a9b686bb8c59.png",
    };
  },
  created() {},
  mounted() {
    // 소켓 on으로 node.js 소켓서버에서 보내는 Data 받음
    this.socket.on("beaconInfo", (data) => {
      console.log(data)
      if (this.$store.state.socketBeaconInfo[0].Minor == data.Minor) {
        this.$store.state.socketBeaconInfo[0].RSSI = data.RSSI;
        this.$store.state.socketBeaconInfo[0].Error = data.Error;
      } else if (this.$store.state.socketBeaconInfo[1].Minor == data.Minor) {
        this.$store.state.socketBeaconInfo[1].RSSI = data.RSSI;
        this.$store.state.socketBeaconInfo[1].Error = data.Error;
      } else if (this.$store.state.socketBeaconInfo[2].Minor == data.Minor) {
        this.$store.state.socketBeaconInfo[2].RSSI = data.RSSI;
        this.$store.state.socketBeaconInfo[2].Error = data.Error;
      }
    });
    this.socket.on("beaconError", (data) => {
      if (this.$store.state.socketBeaconInfo[0].Minor == data.Minor) {
        this.$store.state.socketBeaconInfo[0].Error = data.Error;
      } else if (this.$store.state.socketBeaconInfo[1].Minor == data.Minor) {
        this.$store.state.socketBeaconInfo[1].Error = data.Error;
      } else if (this.$store.state.socketBeaconInfo[2].Minor == data.Minor) {
        this.$store.state.socketBeaconInfo[2].Error = data.Error;
      }
    });
  },
  methods: {
    // 버튼에 따라 컴포넌트 변경하는 함수
    swapComponent(item) {
      this.component = item;
      console.log(this.component);
      // 비콘 추가 및 삭제 true / 비콘 정보 및 신호 불량 비콘 확인 false 를통해
      // 해당 페이지에서 구글 맵 marker를 set 제한
      if (this.component == "비콘 추가 및 삭제") {
        this.eventOn = true;
      } else if (this.component == "비콘 정보 및 신호 불량 비콘 확인") {
        this.eventOn = false;

        // console.log("axios 통신");
        // const url = "http://192.168.0.8:8000/api/admin/beacon_setting_main";
        // const url = "http://172.26.3.122:8000/api/admin/beacon_setting_main";
        const url = "http://49.143.18.165:8000/api/admin/beacon_setting_main";
        
        axios
          .get(url)
          .then((response) => {
            for (let i = 0; i < response.data.beacon_info.length; i++) {
              // console.log(response.data.beacon_info[i].lat, response.data.beacon_info[i].lng)
              this.addMarker(
                response.data.beacon_info[i].lat,
                response.data.beacon_info[i].lng
              );
            }

            this.$store.state.beaconLocation = response.data;
            console.log(this.$store.state.beaconLocation);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    addMarker(lat, lng) {
      const icons = {
        url: this.beaconImage,
        scaledSize: new window.google.maps.Size(20, 25),
        anchor: new window.google.maps.Point(10, 10),
      };
      const marker = new window.google.maps.Marker({
        position: {lat, lng},
        map: this.$store.state.map,
        icon: icons,
      });
      this.$store.state.beaconMarkers.push(marker);
    },
  },
};
</script>

<style>
#Admin_Page1 {
  display: block;
}

#menubar {
  padding: 10px;
}
#GoogleMap {
  display: inline-block;
}

#beacon_Info_wrap {
  float: right;
  width: 365px;
  /* background-color: chartreuse; */
}

#beacon_input {
  display: block;
  width: 100%;
}
</style>