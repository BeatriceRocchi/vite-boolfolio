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

  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
main {
  padding-top: 100px;
}
</style>
