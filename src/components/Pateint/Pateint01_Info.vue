<template>
  <div id="Patient_Info">
      <h2>환자 인적 사항</h2>

      <table class="topTable">
        <tr>
          <td>환자 번호</td>
          <td><div id="Number" style="width:150px; height:25px"></div></td>
        </tr>
        <tr>
          <td>환자 성명</td>
          <td><div id="Name" style="width:150px; height:25px"></div></td>
        </tr>
        <tr>
          <td>주민 번호</td>
            <td>
              <div id="FrontSecurityNumber" style="width:100px; height:25px"></div>
              -
              <div id="BackSecurityNumber" style="width:100px; height:25px"></div>
            </td>
        </tr>
        <tr>
          <td>우편 번호</td>
          <td><div id="postNumber" style="width:200px; height:25px"></div></td>
        </tr>
        <tr>
          <td>주 소</td>
          <td><div id="Address" style="width:300px; height:25px"></div></td>
        </tr>
        <tr>
          <td></td>
          <td><div id="DetailAddress" style="width:300px; height:25px"></div></td>
        </tr>
        <tr>
          <td>전화 번호</td>
          <td><div id="TelNumber" style="width:300px; height:25px"></div></td>
        </tr>
        <tr>
          <td>참고 사항</td>
          <td><div id="Note" style="width:300px; height:100px"></div></td>
        </tr>
      </table>

      <table class="bottomTable">
        <tr>
          <td>최종 진료일</td>
          <td><div id="finalClinicDate" style="width: 100px; height: 25px"></div></td>
          <td>최종 진료실</td>
          <td><div id="finalClinicRoom" style="width: 100px; height: 25px"></div></td>
        </tr>
        <tr>
          <td>최종 진료과</td>
          <td><div id="finalDepartment" style="width: 100px; height: 25px"></div></td>
          <td>총 미수금</td>
          <td><div id="totalReceive" style="width: 100px; height: 25px"></div></td>
        </tr>
      </table>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.topTable{
  text-align: center;
}
.topTable td{
  padding: 10px;
}
#Number, #Name, #postNumber, #Address, #DetailAddress, #TelNumber, #Note{
  border : 1px solid;
}
#FrontSecurityNumber, #BackSecurityNumber{
  display: inline-block;
  border : 1px solid;
}
.bottomTable{
  margin: 20px auto;
  border : 1px solid;
  text-align: center;
}
.bottomTable td{
  padding: 10px;
}
#finalClinicDate, #finalClinicRoom, #finalDepartment, #totalReceive{
  border : 1px solid
}
</style>