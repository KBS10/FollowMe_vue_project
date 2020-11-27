<template>
  <div id="Admin">
    <!-- 메인메뉴 card-box (vTabs) -->
    <v-card-title id="header">
      <router-link :to="{ name: 'Admin' }"
        ><img src="../img/follow_me.png" id="logo" width="200" height="50"
      /></router-link>
      <v-tabs id="menu_bar" v-model="tab">
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-card-title>
    <!-- 메인메뉴 card-box (vTabs) -->

    <!-- 메인template card-box (vTabsItems) -->
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card v-if="item === items[0]" flat>
          <v-card-text id="">
            <h1>Admin 페이지입니다.</h1>
          </v-card-text>
        </v-card>
        <v-card v-else-if="item === items[1]" flat>
          <v-card-text id="">
            <Admin_Page1></Admin_Page1>
          </v-card-text>
        </v-card>
        <v-card v-else-if="item === items[2]" flat>
          <v-card-text id="">
            <Admin_Page2></Admin_Page2>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <!-- 메인template card-box (vTabsItems) -->
  </div>
</template>
<script>
import Admin_Page1 from "../components/Admin_Page1";
import Admin_Page2 from "../components/Admin_Page2";

export default {
  components: {
    Admin_Page1,
    Admin_Page2,
  },
  data: () => ({
    tab: null,
    items: ["Main", "비콘 설정 및 관리", "실내 동선 설정 및 관리"],
  }),
};
</script>

<style>
#header {
  display: block;
}

#logo {
  float: left;
}
.v-tab {
  flex: inherit;
}

/* 전체 센터정렬 */
.v-card__text {
  background-color: skyblue;
}
</style>