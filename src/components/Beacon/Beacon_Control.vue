<template>
  <div id="Beacon_Control">
      <p>비콘 추가</p>
  </div>
</template>

<script>
import { EventBus } from '../../utils/bus';
// import axios from 'axios';
export default {
  data: () => {
    return{

    }
  },
  created(){
    EventBus.$on('test', function(value){
      console.log("이벤트를 전달받음. 전달받은 값 : ", value)
    })
  },
  method : {

  }
}
</script>

<style>

</style>