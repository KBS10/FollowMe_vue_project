<template>
  <div id="Admin_Page1">
      <h1>비콘 설정 및 관리</h1>
        <GmapMap
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
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
  data : () =>({
  })
}
</script>

<style>

</style>