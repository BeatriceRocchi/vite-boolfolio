<script>
import axios from "axios";
import { store } from "../data/store";

import ProjectCard from "../components/partials/ProjectCard.vue";
import Paginator from "../components/partials/Paginator.vue";

export default {
  name: "Projects",

  components: {
    ProjectCard,
    Paginator,
  },

  data() {
    return {
      store,
      projects: [],
      paginatorData: {},
    };
  },

  methods: {
    getApi(apiUrl) {
      axios
        .get(apiUrl)
        .then((result) => {
          this.projects = result.data.data;
          this.paginatorData.current_page = result.data.current_page;
          this.paginatorData.links = result.data.links;
          this.paginatorData.last_page = result.data.last_page;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getApi(store.apiUrl + "projects");
  },
};
</script>

<template>
  <h2>My projects</h2>
  <div class="card-wrapper">
    <div class="container">
      <div class="row row-gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :projectObject="project"
        />
      </div>

      <div class="row">
        <Paginator :paginator="paginatorData" @changePage="getApi" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
