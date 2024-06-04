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
      <div class="card-custom-front">
        <div class="card-body">
          <h5 class="card-title">{{ projectObject.title }}</h5>
          <p class="card-text">
            {{ projectObject.description }}
          </p>

          <div>
            <span class="badge text-bg-primary">
              {{ projectObject.type?.name }}
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

      <div class="card card-custom-back">
        <div
          class="card-body d-flex justify-content-center align-items-center h-100"
        >
          <router-link
            :to="{
              name: 'projectDetail',
              params: { slug: projectObject.slug },
            }"
            class="btn btn-custom"
            >More details</router-link
          >
        </div>
      </div>
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

    &-back {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 10px;
      top: 0;
      left: 0;
      overflow-y: auto;

      .btn-custom {
        background-color: white;
        width: fit-content;
      }
    }

    &:hover {
      .card-custom-back {
        animation: 0.9s expand ease-in-out;
        display: block;
        background-color: $color-primary;
      }
    }
  }
}

@keyframes expand {
  0% {
    transform: scale(0);
    background-color: rgba($color-primary, 0.2);
  }
  100% {
    transform: scale(1);
    background-color: $color-primary;
  }
}
</style>
