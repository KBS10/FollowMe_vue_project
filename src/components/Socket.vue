<template>
  <div id="socket_vue">
    We're connected to the server
    <v-btn @click="message()">message</v-btn>
    <v-btn @click="pingServer()">Ping Server</v-btn>
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
    // this.socket = io("http://192.168.0.32:5500");
    // console.log(this.socket)
    // this.socket = io.io("", {
    //   reconnect: true,
    //   rejectUnatuhorized: false,
    //   secure: true,
    // });
  },
  mounted() {
    console.log("렌더링 체크!");
    this.socket.emit("pingServer", "message");
    // this.socket.on("pingServer", (data) => {
    //   console.log(data);
    //   this.socket.emit("users");
    // })
    // this.socket.emit("pingServer");
    // this.socket.on("users", (data) => {
    //   console.log("users",data);
    // })
  },
  sockets:{
    connect: function () {
      console.log('socket to notification channel connected')
    },
  },
  methods: {
    message() {
      this.socket.emit("message", "data");

      console.log(this.socket);
    },

    pingServer() {
      this.socket.emit("pingServer", "씨발");
      console.log("씨발")
      this.socket.on("pingServer",data => {
        console.log(data);
      })
    },
  },
};
</script>