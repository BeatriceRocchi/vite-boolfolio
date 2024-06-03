<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <Header />

  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss"></style>
