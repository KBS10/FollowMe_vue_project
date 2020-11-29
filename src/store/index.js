import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// data
    socketBeaconInfo  : [],
    markers : [],
    map : null,
    beaconInfo: {
      room : ' ',
      uuid : '',
      beacon_scanner_id : '',
      major : '',
      beacon_id_minor : '',
      lat : '',
      lng : '',
    }

  },
  getters: {// computed

  },
  mutations: { 
    setBeaconInfo(room, uuid, beacon_scanner_id, major, beacon_id_minor, lat, lng){
      this.state.room                 = room;
      this.state.uuid                 = uuid;
      this.state.beacon_scanner_id    = beacon_scanner_id;
      this.state.major                = major;
      this.state.beacon_id_minor      = beacon_id_minor;
      this.state.lat                  = lat;
      this.state.lng                  = lng;
    },
  },
  actions: {
  },
  modules: {
  }
})
