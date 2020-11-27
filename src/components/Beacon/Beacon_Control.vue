<template>
  <div id="Beacon_Control">
      <p>비콘 추가</p>
      <v-btn @click="clearMarker()">비콘 숨기기</v-btn>
      <v-btn @click="showMarkers()">모든 비콘 보이기</v-btn>
      <v-btn @click="deleteMarkers()">비콘 데이터 삭제</v-btn>
  </div>
</template>

<script>
import { EventBus } from '../../utils/bus';
// import axios from 'axios';
export default {
  data: () => {
    return{
      beaconMap : null,
      markers : [],
      beaconImage:"https://user-images.githubusercontent.com/53847348/99767420-5ba24b80-2b46-11eb-8b3c-a9b686bb8c59.png",
    }
  },
  created(){
    
  },
  mounted(){
    EventBus.$on('Map', function(value){
      this.beaconMap = value;
      // console.log("이벤트를 전달받음. 전달받은 값 : ", this.beaconMap)
    })
  },
  methods : {
    clearMarker(){
      console.log("비콘 숨기기")
    },
    showMarkers(){
      console.log("모든 비콘 보이기")
    },
    deleteMarkers(){
      console.log("비콘 데이터 삭제")
    }
  }
}
</script>

<style>

</style>