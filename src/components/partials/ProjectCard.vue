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
        <span class="badge badge-custom-secondary">
          {{ projectObject.type?.name }}
        </span>

        <h3 class="card-title">
          {{ projectObject.title }}
        </h3>
        <p class="card-text">
          {{ projectObject.description }}
        </p>

        <div class="languages-box">
          <i class="fa-solid fa-code"></i>
          <span
            v-for="technology in projectObject.technologies"
            :key="technology.id"
            class="badge badge-custom-tertiary"
          >
            {{ technology.name }}
          </span>
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
    // background-color: $color-primary;
    // color: white;

    .card-body {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;

      h3 {
        letter-spacing: 3px;
      }

      .badge-custom-secondary {
        position: absolute;
        right: 0;
        top: 0;
      }

      .card-text {
        min-height: 100px;
        margin: 10px 0 30px;
      }

      .languages-box {
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          color: $color-tertiary;
          font-size: 1.2rem;
        }
      }
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
      box-shadow: 0 0 20px 10px rgba(black, 0.2);
      transform: translateY(-20px);
      transition: all 0.5s ease;

      .btn-custom-primary {
        display: block;
      }
    }
  }
}
</style>
