<script>
export default {
  props: {
    projectObject: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card card-custom">
      <!-- TODO: gestire immagini -->
      <img
        :src="projectObject.img"
        class="card-img-top"
        :alt="projectObject.title"
      />
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
