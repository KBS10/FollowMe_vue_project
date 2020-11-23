<template>
  <div id="Admin_Page2">
      <h1>실내 동선 설정 및 관리</h1>
      <div id="menubar">
          <v-btn v-for="item in componentsArray" :key="item" @click="swapComponent(item)"> {{ item }}</v-btn>
      </div>

      <div id="GoogleMap">
        <GoogleMap/>
      </div>

      <div v-switch="component" id="Node_Info">
        <div v-case="'노드 추가 및 삭제'">
          <Node_Control/>
        </div>
        <div v-case="'노드 연결'">
         <Node_Connect/>
        </div>
      </div>
  </div>
</template>

<script>
import GoogleMap          from "./GoogleMap"
import Node_Control       from "./Node/Node_Control"
import Node_Connect       from "./Node/Node_Connect"
export default {
  components : {
    GoogleMap, Node_Connect, Node_Control
  },
  data() {
      return {
        component : "노드 추가 및 삭제",
        componentsArray : ["노드 추가 및 삭제", "노드 연결"]
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

#Admin_Page2{
  display : block;
}

#menubar{
  padding: 10px;
}
#GoogleMap{
  display: inline-block;
}


#Node_Info{
  float: right;
  width: 350px;
  background-color: chartreuse;
}
</style>