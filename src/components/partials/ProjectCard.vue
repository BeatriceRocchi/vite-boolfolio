<script>
export default {
  props: {
    projectObject: Object,
  },
  // methods: {
  //   getImagePath(image) {
  //     return `http://127.0.0.1:8000/storage/${image}`;
  //   },
  // },
};
</script>

<template>
  <div class="col">
    <div class="card card-custom">
      <!-- <img
        v-if="projectObject.img"
        :src="getImagePath(projectObject.img)"
        class="card-img-top"
        :alt="projectObject.title"
      />
      <img
        v-else
        src="../../assets/img/img-placeholder.png"
        class="card-img-top"
      /> -->
      <div class="card-body">
        <h5 class="card-title">{{ projectObject.title }}</h5>
        <p class="card-text">
          {{ projectObject.description }}
        </p>

        <div>
          <span class="badge text-bg-primary">
            {{ projectObject.type.name }}
          </span>
        </div>

        <span
          v-for="technology in projectObject.technologies"
          :key="technology.id"
          class="badge text-bg-success me-1"
        >
          {{ technology.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-custom {
  width: 300px;
  height: 100%;
}
</style>
