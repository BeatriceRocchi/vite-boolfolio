<script>
import axios from "axios";
import { store } from "./data/store";
import ProjectCard from "./components/partials/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },

  data() {
    return {
      store,
      projects: [],
      totalPages: 0,
    };
  },

  methods: {
    getApi() {
      axios
        .get(store.apiUrl, {
          params: store.queryParams,
        })
        .then((result) => {
          this.projects = result.data.data;
          this.totalPages = result.data.total / result.data.per_page;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    nextPage(isNext) {
      isNext ? store.queryParams.page++ : store.queryParams.page--;
      this.getApi();
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <h1 class="text-center my-4 text-white">Vite-boolfolio</h1>

  <div class="card-wrapper my-4">
    <div class="container">
      <div class="row row-cols-4 row-gap-4 justify-content-center">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :projectObject="project"
        />
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center align-items-center">
    <button
      class="btn btn-light"
      @click="nextPage(false)"
      v-if="store.queryParams.page > 1"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>

    <div class="mx-3">
      Pagina {{ store.queryParams.page }} di {{ totalPages }}
    </div>

    <button
      class="btn btn-light"
      @click="nextPage(true)"
      v-if="store.queryParams.page < totalPages"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<style lang="scss">
.card-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .col {
    min-height: 400px;
  }
}
</style>
