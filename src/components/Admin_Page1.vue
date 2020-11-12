<template>
  <div id="Admin_Page1">
      <h1>비콘 설정 및 관리</h1>
      <!-- 비콘 설정 및 관리에서 버튼 반복 -->
      <div id="menubar">
          <v-btn v-for="item in componentsArray" :key="item" @click="swapComponent(item)"> {{ item }}</v-btn>
      </div>

      <!-- 비콘을 설정할 수 있는 지도 표시 -->
      <div id="GoogleMap">
        <GoogleMap/>
      </div>

      <!-- 비콘에 대해 추가, 삭제, 이상 비콘 확인  -->
      <div v-switch="component" id="beacon_Info">
        <div v-case="'비콘 정보'">
          <Beacon_Info/>
        </div>
        <div v-case="'비콘 추가'">
         <Beacon_Plus/>
        </div>
        <div v-case="'비콘 삭제'">
          <Beacon_Delete/>
        </div>
        <div v-case="'신호 불량 비콘 확인'">
          <Beacon_Strange/>
        </div>
      </div>
  </div>
</template>

<script>
import GoogleMap      from "./GoogleMap"
import Beacon_Info    from "./Beacon/Beacon00_Info"
import Beacon_Plus    from "./Beacon/Beacon01_Plus"
import Beacon_Delete  from "./Beacon/Beacon02_Delete"
import Beacon_Strange from "./Beacon/Beacon03_Strange"


export default {
  components : {
    GoogleMap, Beacon_Info, Beacon_Plus, Beacon_Delete, Beacon_Strange
  },
  data() {
      return {
        component : "비콘 정보",
        componentsArray : ["비콘 정보", "비콘 추가", "비콘 삭제", "신호 불량 비콘 확인"]
      };
  },
  methods: {
    swapComponent: function(item){
      this.currentComponent = item;
      console.log(this.currentComponent)
      this.component = item
    }
  },
}
</script>

<style>

#Admin_Page1{
  display : block;
}

#menubar{
  padding: 10px;
}
#GoogleMap{
  display: inline-block;
}


#beacon_Info{
  float: right;
  width: 350px;
  background-color: chartreuse;
}
</style>