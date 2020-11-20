<template>
    
  <div id="socket">
      <v-btn @click="disconnect" v-if="status === 'connected'">연결끊기</v-btn> 
      <v-btn @click="connect" v-if="status === 'disconnected'">연결</v-btn>{{status}}
      <div v-if="status === 'connected'">
        <v-btn @click="pingServer()">Ping Server</v-btn>
      </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            status : "disconnected",
            data: "",
     }
    },
    sockets: {
        connect: function () {
            console.log('socket connected');
        },
        disconnected: function (){
            console.log('socket disconnected');
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", )',data)
        },
        messageChannel(data) {
            this.socketMessage = data
        },
    },
    methods: {
        connect: function(){
            this.status = "connected";
        },
        disconnect: function(){
            this.status = "disconnected";
        },
        pingServer: function () {
            this.$socket.emit('pingServer',"123")
            console.log("emit 보냄")
        }
    }
}
</script>