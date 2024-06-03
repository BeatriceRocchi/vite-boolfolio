<script>
export default {
  props: {
    paginator: Object,
  },

  methods: {
    changePage(link) {
      this.$emit("changePage", link);
    },
  },
};
</script>

<template>
  <div class="paginator-wrapper">
    <button
      class="btn btn-light"
      v-for="link in paginator.links"
      v-html="link.label"
      :key="link.label"
      :disabled="link.active || !link.url"
      @click="changePage(link.url)"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
.paginator-wrapper {
  margin: 30px auto;
  text-align: center;

  button {
    margin: 0 5px;
  }
}
</style>
