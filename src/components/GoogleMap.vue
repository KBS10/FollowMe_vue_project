<template>
  <div id="google-map">
      <GmapMap id="gmap"
        :center="center"
        :zoom="20"
        style="width:800px;  height: 400px;"
      >
    </GmapMap>
  </div>
</template>

<script>
export default {
    mounted() {
    },
    computed: {
    },
    data () {
      return{
        map : null,
        gecoder : null,
        center: { lat: 35.896783, lng: 128.620941 },
        markers: [],
        places: [],
        customOverlay: [],
        currentPlace: null,
        scrollwheel: true,
        floorImages: ["../src/img/floor2.png", "../src/img/floor3.png"]
      }
    },
    methods : {

  }
}
</script>

<style>

</style>