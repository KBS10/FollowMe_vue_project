<template>
  <div id="Beacon_Info">
    <h1>비콘 정보</h1>

    <!-- <form id="search_Beacon_Info" method="post">
      <select name="keyword" id="keyword">
        <option value="UUID">UUID</option>
        <option value="MAJOR">MAJOR</option>
        <option value="MINOR">MINOR</option>
        <option value="RSSI">RSSI</option>
      </select>
      <input
        type="text"
        id="keyword_text"
        name="keyword_text"
        size="30"
        required="required"
      />
      <input type="submit" class="search" value="검색" />
    </form> -->

    <table id="show_Beacon_Info">
      <tr id="beaconCategory">
        <td>ScannerID</td>
        <td>Major</td>
        <td>Minor</td>
        <td>RSSI</td>
        <td style="width : 170px">상태확인</td>
      </tr>
      <tr
        v-for="info in $store.state.socketBeaconInfo"
        :key="info.Minor"
      >
        <td>{{ info.scannerID }}</td>
        <td>{{ info.Major }}</td>
        <td>{{ info.Minor }}</td>
        <td>{{ info.RSSI }}</td>
        <td >{{ info.Error }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      search: "",
    };
  },
  created() {},
  async mounted() {
  },
  methods: {
  },
};
</script>

<style>
#keyword {
  margin-left: 10px;
  background-color: white;
  text-align: center;
}
#keyword_text {
  margin: 5px;
  height: 20px;
  background-color: white;
}
.search {
  background-color: yellow;
  width: 50px;
  height: 20px;
}
#show_Beacon_Info {
  width: 100%;
  margin-top: 10px;
  background-color: wheat;
  text-align: center;
  font-weight: bold;
}
#beaconCategory {
  background-color: rgb(255, 143, 166);
}
td {
  width: 150px;
}
</style>