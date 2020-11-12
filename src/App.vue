<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>

<script>
// import intro              from '../src/components/intro.vue'


export default {
  name: 'App',

  components: {
    // intro,
  },

  data: () => ({
  }),
};
</script>
<style>
#app{
  margin: 0 auto;
  width: 1200px;
}
</style>