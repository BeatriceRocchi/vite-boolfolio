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
      <div class="card-body">
        <h3 class="card-title">
          {{ projectObject.title }}
        </h3>
        <p class="card-text">
          {{ projectObject.description }}
        </p>

        <div class="badge-container">
          <span class="badge text-bg-primary">
            {{ projectObject.type?.name }}
          </span>

          <div>
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

      <router-link
        :to="{
          name: 'projectDetail',
          params: { slug: projectObject.slug },
        }"
        class="btn btn-custom-primary"
        >View more</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables.scss";

.col {
  min-width: 300px;

  .card-custom {
    min-height: 350px;
    position: relative;

    .card-body {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;

      .card-text {
        min-height: 100px;
      }
    }

    .badge-container {
      margin: 20px 0;
    }

    .btn-custom-primary {
      display: none;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
      text-transform: uppercase;
      border-radius: 20px;
    }

    &:hover {
      box-shadow: 0 0 15px 5px rgba(black, 0.2);
      transform: translateY(-20px);
      transition: all 0.5s ease;

      .btn-custom-primary {
        display: block;
      }
    }
  }
}
</style>
