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
            <td>ScannerID</td>
            <td>Major</td>
            <td>Minor</td>
            <td>RSSI</td>
        </th>
        <tr v-for="(beaconInfos, Minor) in beaconInfo" :key="Minor" :AdminBeaconPage="beaconInfo">
            <td>{{ beaconInfos.scannerID }}</td>
            <td>{{ beaconInfos.Major }}</td>
            <td>{{ beaconInfos.Minor }}</td>
            <td>{{ beaconInfos.RSSI }}</td>
        </tr>

      </table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    beaconInfo: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  async mounted() {},
  methods: {},
};
</script>

<style>
#search_Beacon_Info {
  background-color: blanchedalmond;
}
#keyword {
  margin-left: 10px;
  background-color: white;
  text-align: center;
}
#keyword_text {
  margin: 5px;
  background-color: white;
}
.search {
  background-color: yellow;
  width: 50px;
}
#show_Beacon_Info {
  width: 100%;
  margin-top: 10px;
  background-color: wheat;
}
td {
  width: 100px;
}
</style>