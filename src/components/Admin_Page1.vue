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
        <div v-case="'비콘 추가 및 삭제'">
         <Beacon_Control/>
        </div>
        <div v-case="'비콘 정보 및 신호 불량 비콘 확인'">
          <Beacon_Info/>
        </div>
      </div>
  </div>
</template>

<script>
import GoogleMap        from "./GoogleMap"
import Beacon_Info       from "./Beacon/Beacon_Info"
import Beacon_Control   from "./Beacon/Beacon_Control"


export default {
  components : {
    GoogleMap, Beacon_Info, Beacon_Control,
  },
  data() {
      return {
        component : "비콘 추가 및 삭제",
        componentsArray : ["비콘 추가 및 삭제", "비콘 정보 및 신호 불량 비콘 확인"]
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
  /* background-color: chartreuse; */
}
</style>