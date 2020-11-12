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
        <div v-case="'노드 추가'">
          <NodePlus/>
        </div>
        <div v-case="'노드 삭제'">
         <NodeDelete/>
        </div>
        <div v-case="'노드 연결'">
          <NodeConnect/>
        </div>
      </div>
  </div>
</template>

<script>
import GoogleMap      from "./GoogleMap"
import NodePlus       from "./Node/Node01_Plus"
import NodeDelete     from "./Node/Node02_Delete"
import NodeConnect    from "./Node/Node03_Connect"
export default {
  components : {
    GoogleMap, NodePlus, NodeDelete, NodeConnect
  },
  data() {
      return {
        component : "노드 추가",
        componentsArray : ["노드 추가", "노드 삭제", "노드 연결"]
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