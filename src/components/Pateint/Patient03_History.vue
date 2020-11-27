<template>
  <div id="Patient_History">
      <h2>진료 내역</h2>
      <div id="history_Header">
        <input id="history_Date" type="Date">
         진료 여부

        <div id="history_Choose">
         <input type="radio" id="history_Radio_Total">
         <label for="history_Radio_Total">전체</label>
         <input type="radio" id="history_Radio_Complete">
         <label for="history_Radio_Complete">완료</label>
         <input type="radio" id="history_Radio_Wait">
         <label for="history_Radio_Wait">대기</label>
        </div>
      </div>

  <table class="history_Table">
    <th>
      <td>환자번호</td>
      <td>성명</td>
      <td>진료과목</td>
      <td>진료실</td>
      <td>담당의사</td>
      <td>시간</td>
      <td>진료현황</td>
      <td>진료종료</td>
    </th>

    <tr>
    </tr>
  </table>

  </div>
</template>

<script>
export default {};
</script>

<style>
#Patient_History {
  text-align: center;
}
#history_Header {
  background-color: rgb(84, 181, 220);
  color: white;
}
#history_Choose {
  display: inline-block;
  padding: 0px 10px;
}
.history_Table {
  text-align: center;
}
.history_Table th {
  background-color: rgb(84, 181, 220);
  color: white;
}
.history_Table td {
  width: 100px;
  border: 1px solid;
}
</style>