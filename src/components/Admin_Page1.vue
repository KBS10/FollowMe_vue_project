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
      <GoogleMap  :handelOnClick=eventOn />
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
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap/GoogleMap";
import Beacon_Info from "./Beacon/Beacon_Info";
import Beacon_Control from "./Beacon/Beacon_Control";
import io from "socket.io-client";

export default {
  components: {
    GoogleMap,
    Beacon_Info,
    Beacon_Control,
  },
  props:[
    'handelOnClick',
  ]
  ,
  data() {
    return {
      eventOn: false,
      socket: io("http://localhost:3000/"),
      component: "비콘 추가 및 삭제",
      componentsArray: [
        "비콘 추가 및 삭제",
        "비콘 정보 및 신호 불량 비콘 확인",
      ],
    };
  },
  created() {},
  mounted() {
    this.socket.on("beaconInfo", (data) => {
      this.$store.state.beaconInfo = data;
      // console.log(this.$store.state.beaconInfo)
    });
  },
  methods: {
    swapComponent: function (item) {
      this.component = item;
      console.log(this.component);
      if(this.component == "비콘 추가 및 삭제"){
        this.eventOn = true;
        console.log(this.eventOn)
      }else if(this.component == "비콘 정보 및 신호 불량 비콘 확인"){
        this.eventOn = false;
        console.log(this.eventOn)
      }
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
</style>