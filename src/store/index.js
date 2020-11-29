import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data
    socketBeaconInfo  : [],
    markers : [],
    map : null,
    beacons : [{
      count : 1,
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
