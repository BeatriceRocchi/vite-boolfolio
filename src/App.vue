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
      projects: [],
    };
  },

  methods: {
    getApi() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          this.projects = result.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <h1>Vite-boolfolio</h1>
  <div class="card-wrapper">
    <div class="container">
      <div class="row row-cols-4 row-gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :projectObject="project"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
