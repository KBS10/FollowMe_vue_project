<template>
  <div id="socket_vue">
    We're connected to the server
    <v-btn @click="message()">message</v-btn>
    <v-btn @click="beaconInfo()">beaconInfo</v-btn>
    <v-btn @click="pingServer()">pingServer</v-btn>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      socket: io("http://192.168.0.32:5500/"),
    };
  },
  created() {
    console.log("렌더링 체크! - 1");
  },
  mounted() {
    console.log("렌더링 체크!");
    this.socket.emit("pingServer", "message");
  },
  sockets: {
    connect: function () {
      console.log("socket to notification channel connected");
    },
  },
  methods: {
    message() {
      this.socket.emit("message", "data");
      console.log(this.socket);
    },
    beaconInfo() {
      this.socket.emit("pingServer", "Ping server 보내");
      console.log("beacon 정보 보냄");
      this.socket.on("beaconInfo", (data) => {
        console.log("beacon");
        console.log(data);
      });
    },
    pingServer() {
      this.socket.emit("beaconInfo", "beacon 정보 보냄");
      console.log("ping Server 서버에게 emit 요청");
    },
  },
};
</script>