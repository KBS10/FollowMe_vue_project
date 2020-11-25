<template>
  <div id="Beacon_Info">
      <h1>비콘 정보</h1>

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

      <table id="show_Beacon_Info">
        <th>
            <td>Major</td>
            <td>Minor</td>
            <td>RSSI</td>
            <td>TX</td>
        </th>
      </table>
  </div>
</template>

<script>
// import io from "socket.io-client";
export default {
  data() {
    return {
      beaconInfo: {},
      // socket: io("http://localhost:3000/"),
    }
  },
  sockets:{
    connect: function () {
      console.log('socket to notification channel connected')
    },
  },
  mounted(){
      this.socket.on("beaconInfo",data => {
        console.log("beacon")
        console.log(data);
      })
  },
  methods: {
  },
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
#show_Beacon_Info{
  width: 100%;
  margin-top: 10px;
  background-color: wheat;
}
td{
  width: 100px;
}
</style>