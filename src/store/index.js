import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data
    // 소켓통신을 통해 Data 받아옴
    socketBeaconInfo  : [
      {
        'scannerID': '3_S001',
        'UUID': 'e2c56db5-dffb-48d2-b060-d0f5a71096e0',
        'Major': 30001,
        'Minor': 48103,
        'RSSI': 0,
        'Error' : ""
      },
      {
        'scannerID': '3_S001',
        'UUID': 'e2c56db5-dffb-48d2-b060-d0f5a71096e0',
        'Major': 30001,
        'Minor': 24076,
        'RSSI': 0,
        'Error' : ""
      },
      {
        'scannerID': '3_S001',
        'UUID': 'e2c56db5-dffb-48d2-b060-d0f5a71096e0',
        'Major': 30001,
        'Minor': 50280,
        'RSSI': 0,
        'Error' : ""
      },
    ],
    // Google Map 객체에 Click 시 마커의 정보를 배열에 저장.
    markers : [],
    // Axios 통신을 통해 서버에서 beacon의 정보 받는 배열
    beaconLocation : [],
    // Axios 통신을 통해 서버에서 beacon의 정보중 lat, lng를 저장하는 배열
    beaconMarkers : [],
    // Google Map 객체
    map : null,
    // Axios 통신을 통해 서버에 beacon 데이터 보내는 배열
    beacons : [{
      room : " ",
    }],
  },
  getters: {// computed

  },
  mutations: { 
  },
  actions: {
  },
  modules: {
  }
})
