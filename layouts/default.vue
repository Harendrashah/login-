<template>
  <div>
    <div class="flex relative">
      <SideBar />
      <div class="container-main flex-1">
        <NavBar />
        <div class="home-section">
          <NuxtPage />
          <div class="setting-dispaly">
            <SettingPage />
          </div>
        </div>
      </div>
    </div>
    <!-- <NuxtLayout :name="custom"> </NuxtLayout> -->
  </div>
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import SettingPage from "./pages/SettingPage.vue";

import SideBar from "./components/SideBar.vue";
</script>
<style scoped>
.container-main {
  width: calc(100% - 265px) !important;
}
.home-section {
  height: calc(100vh - 100px) !important;
  overflow-y: scroll;
}

.setting-display {
  position: absolute !important;
  top: 50% !important;
  left: 96% !important;
}
</style>
