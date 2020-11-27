<template>
  <div id="Medical">
    <div id="header">
      <router-link :to="{ name: 'Medical' }"
        ><img src="../img/follow_me.png" id="logo" width="200" height="50"
      /></router-link>
      <h1 id="title">Follow Me Medical Web</h1>
    </div>

    <div id="header-content">
      <p id="patinet_Search">환자 검색</p>
      <input id="input_Patient" />
      <v-btn id="search"> 검색 </v-btn>
    </div>
    <div id="content">
      <div id="Pateint_Info">
        <Patient_Info />
      </div>
      <div id="Patient_Receipt">
        <Patient_Receipt />
      </div>
      <div id="Patient_History">
        <Patient_History />
      </div>
    </div>
  </div>
</template>
<script>
import Patient_Info from "./Pateint/Pateint01_Info";
import Patient_Receipt from "./Pateint/Pateint02_Receipt";
import Patient_History from "./Pateint/Patient03_History";
export default {
  components: {
    Patient_Info,
    Patient_Receipt,
    Patient_History,
  },
  data: () => ({}),
};
</script>

<style>
#Medical {
  margin: 0 auto;
  width: 1200px;
}
#header {
  display: block;
  height: 150px;
  border: 1px solid;
}
#logo {
  display: inline-block;
}
#title {
  display: inline-block;
  padding-left: 150px;
}
#search {
  margin: 10px;
}

h2 {
  text-align: center;
  font-weight: bold;
  width: 100%;
  padding: 10px;
}
/* 컨텐츠 내용 */
#content {
  display: block;
  background-color: blueviolet;
}
#patinet_Search {
  color: black;
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}
#input_Patient {
  margin: 10px;
  border: 1px solid;
}

/* 환자 인적 사항 */
#Pateint_Info {
  border: 1px solid;
  float: left;
  width: 500px;
}
/* 외래 접수 */
#Patient_Receipt {
  border: 1px solid;
  float: right;
  width: 700px;
}
/* 진료 내역 */
#Patient_History {
  border: 1px solid;
  float: right;
  width: 700px;
}
</style>