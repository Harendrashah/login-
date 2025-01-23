<template>
  <div class="logout-page">
    <h1>Logging out...</h1>
    <p>Please wait...</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  // Clear the loggedIn status from localStorage
  localStorage.removeItem("loggedIn");

  // Redirect to the home page or login page
  router.push("/"); // Change this to your desired redirect page
});
</script>

<style scoped>
.logout-page {
  text-align: center;
  margin-top: 50px;
}
</style>
