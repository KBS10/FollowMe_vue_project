import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data
    socketBeaconInfo  : [
      {
        'scannerID': '3_S001',
        'UUID': 'e2c56db5-dffb-48d2-b060-d0f5a71096e0',
        'Major': 30001,
        'Minor': 48103,
        'RSSI': -87,
        'Error' : "양호"
      },
      {
        'scannerID': '3_S001',
        'UUID': 'e2c56db5-dffb-48d2-b060-d0f5a71096e0',
        'Major': 30001,
        'Minor': 24076,
        'RSSI': -68,
        'Error' : "양호"
      },
      {
        'scannerID': '3_S001',
        'UUID': 'e2c56db5-dffb-48d2-b060-d0f5a71096e0',
        'Major': 30001,
        'Minor': 50280,
        'RSSI': -68,
        'Error' : "양호"
      },
    ],
    markers : [],
    map : null,
    beacons : [{
      
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
