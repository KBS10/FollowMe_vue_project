<template>
    <div id="Beacon_Info_Input">
        <h1>비콘 정보 DB 넘기는 페이지</h1>

        <div class="BeaconRows">
            <div class="BeaconRows-BeaconRowWrap" data-term-luid="beacon-1">
                <span id="count">{{ count }}</span>
                <div class="Input_Beacon_Info">

                    <input type="text" id="room" v-model="room" hidden>

                    <label for="uuid">uuid</label> 
                    <input type="text" id="uuid" v-model="uuid">
                    
                    <label for="Major">Major</label> 
                    <input type="text" id="Major" v-model="major">

                    <label for="Minor">Minor</label> 
                    <input type="text" id="Minor" v-model="beacon_id_minor">

                    <label for="lat">lat</label> 
                    <input type="text" id="lat" v-model="lat">

                    <label for="lng">lng</label> 
                    <input type="text" id="lng" v-model="lng">
                </div>
                <button id="plus">
                    <i class="fas fa-plus" id="plus" ></i>
                </button>
                <button id="delete">
                    <i class="fas fa-trash-alt" id="delete"></i>
                </button>
                <v-btn @click="axiosFunction()">저장</v-btn>
            </div>
        </div>

    </div>    
</template>
<script>
// import axios from 'axios'

export default {
    data()  {
        return {
            count : 1,
            room                : this.$store.state.room,
            uuid                : this.$store.state.uuid,
            beacon_scanner_id   : this.$store.state.beacon_scanner_id,
            major               : this.$store.state.major,
            beacon_id_minor     : this.$store.state.beacon_id_minor,
            lat                 : this.$store.state.lat,
            lng                 : this.$store.state.lng,
        }
    },
    mounted() {

    },
    methods: {
        addBeaconInput(){
            this.count++;
            console.log(this.count)
        },
        axiosFunction(){
            console.log("HI")
            console.log(this.uuid)  
            // var data = {
            //         beacon_id_minor : this.beacon_id_minor,
            //         uuid : this.uuid,
            //         major : this.major,
            //         lat : this.lat,
            //         lng : this.lng,
            //         beacon_scanner_id : this.beacon_scanner_id,
            //         room : "dfasdf",
            // } 
            // const url = "http://192.168.0.8:8000/api/admin/beacon_create"
            // axios.post(url, data)
            // .then(function(response){
            //     console.log(response);
            // })
            // .catch(function(error){
            //     console.log(error)
            // })

        }
    }
}
</script>
<style scoped>
#count{
    font-weight: bold;
    font-size: 1.5em;
}
.BeaconRows .BeaconRows-BeaconRowWrap .Input_Beacon_Info{
    display: inline-block;
    margin : 0 10px;
}
</style>