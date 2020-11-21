<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>

<script>
// import intro              from '../src/components/intro.vue'
// import io from 'socket.io-client'

export default {
  name: 'App',

  components: {
    // intro,
  },
};
</script>
<style>
#app{
  margin: 0 auto;
  width: 1200px;
}
</style>