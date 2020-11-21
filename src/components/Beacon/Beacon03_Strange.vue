<template>
  <div id="Beacon03_Plus">
      <h1>신호 불량 비콘 확인</h1>

      <table id="show_Wrong_Beacon_Info">
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
export default {
  data(){
    return{
      BeaconInfo : [],
    }
  },

}
</script>

<style>
#show_Wrong_Beacon_Info{
  width: 100%;
  margin-top: 10px;
  background-color: wheat;
}
td{
  width: 100px;
}
</style>