<template>
  <div id="google-map">
      <GmapMap id="gmap"
        :center="center"
        :zoom="20"
        style="width:800px;  height: 400px;"
      >
      <ground-overlay
        source="../img/floor2.png"
        :bounds="{}"
        :opacity="0.5"
      >
      </ground-overlay>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
    data: () => ({
        center: { lat: 35.896783, lng: 128.620941 },
        markers: [],
        places: [],
        currentPlace: null,
        floorImages: ["../src/img/floor2.png", "../src/img/floor3.png"]
    }),
    mounted() {
        this.geolocate();

    },
    methods : {
         // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    
    geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
            this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
        });
    },
  }
}
</script>

<style>

</style>