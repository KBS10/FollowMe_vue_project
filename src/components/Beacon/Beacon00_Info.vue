<template>
  <div id="Beacon01_Plus">
      <p>비콘 정보</p>

      <form id="search_Beacon_Info" method="post">
        <select name="keyword" id="keyword">
          <option value="UUID">UUID</option>
          <option value="MAJOR">MAJOR</option>
          <option value="MINOR">MINOR</option>
          <option value="RSSI">RSSI</option>
        </select>
        <input type="text" id="keyword_text" name="keyword_text" size="30" required="required">
        <input type="submit" class="search" value="검색">
      </form>

      <div id="socket">
        <p v-if="isConnected">We're connected to the server!</p>
        <p>Message from server: "{{socketMessage}}"</p>
        <button @click="pingServer()">Ping Server</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  sockets: {
  },

  methods: {
    
  }
}
</script>

<style>
#search_Beacon_Info{
  background-color: blanchedalmond;
}
#keyword{
  margin-left: 10px;
  background-color: white;
  text-align: center;
}
#keyword_text{
  margin: 5px;
  background-color: white;
}
.search{
   background-color: yellow;
   width: 50px;
}
</style>