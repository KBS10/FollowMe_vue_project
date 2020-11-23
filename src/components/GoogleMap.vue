<template>
  <div id="google-map">
    <div id = "map"></div>
  </div>
</template>

<script>

export default {
  data: () => ({
      // Google Map 객체 저장
      map : null,
      // Google Map 옵션 저장
      mapOptions : {
        zoom: 19,
        center: {lat: 35.896783,lng: 128.620941},
        disableDefaultUI: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
      },
      srcImage : {
        floor2 : "https://user-images.githubusercontent.com/53847348/99892072-3df2f480-2cb4-11eb-9d56-bae02c75b242.png",
        floor3 : "https://user-images.githubusercontent.com/53847348/99892066-12700a00-2cb4-11eb-898f-1679f957aecc.png"
      }
  }),
  mounted(){
    this.map = new window.google.maps.Map(document.getElementById("map"), this.mapOptions);
    const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(35.89651393057683, 128.6201298818298),
        new window.google.maps.LatLng(35.89707923321034, 128.62176975983763)
    )
    class USGSOverlay extends window.google.maps.OverlayView{
        constructor(bounds, image){
          super();
          this.bounds_ = bounds;
          this.image_ = image;
          this.div_null;
        }
        onAdd() {
            this.div_ = document.createElement("div");
            this.div_.style.position = "absolute";
            this.div_.style.transform = "skewx()"
            const img = document.createElement("img");
            img.id = 'test'
            img.src = this.image_;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.position = "absolute";
            this.div_.appendChild(img);
            const panes = this.getPanes();
            panes.overlayLayer.appendChild(this.div_);
          }
          draw() {
            const overlayProjection = this.getProjection();
            const sw = overlayProjection.fromLatLngToDivPixel(
              this.bounds_.getSouthWest()
            );
            const ne = overlayProjection.fromLatLngToDivPixel(
              this.bounds_.getNorthEast()
            );
            // Resize the image's div to fit the indicated dimensions.
            if (this.div_) {
              this.div_.style.left = sw.x + "px";
              this.div_.style.top = ne.y + "px";
              this.div_.style.width = ne.x - sw.x + "px";
              this.div_.style.height = sw.y - ne.y + "px";
            }
          }
          onRemove() {
            if (this.div_) {
              this.div_.parentNode.removeChild(this.div_);
              this.div_ = null;
            }
          }
      }
      
      const overlay = new USGSOverlay(bounds, this.srcImage.floor2);
      overlay.setMap(this.map);
  }
}
</script>

<style>
  #map {
    height: 400px;
    width: 800px;
    background-color: gray;
  }
</style>