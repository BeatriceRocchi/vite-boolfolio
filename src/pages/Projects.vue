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
      types: [],
      technologies: [],
      paginatorData: {},
    };
  },

  methods: {
    getApi(apiUrl, type = "") {
      axios
        .get(apiUrl + type)
        .then((result) => {
          switch (type) {
            case "types":
              this.types = result.data;
              break;

            case "technologies":
              this.technologies = result.data;
              break;

            default:
              this.projects = result.data.data;
              this.paginatorData.current_page = result.data.current_page;
              this.paginatorData.links = result.data.links;
              this.paginatorData.last_page = result.data.last_page;
              break;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getApi(store.apiUrl, "projects");
    this.getApi(store.apiUrl, "types");
    this.getApi(store.apiUrl, "technologies");
  },
};
</script>

<template>
  <h2>My projects</h2>

  <div class="container d-flex justify-content-around my-4">
    <div class="text-center">
      <h6>Types</h6>
      <span
        class="badge badge-custom text-bg-primary"
        v-for="item in types"
        :key="`type-${item.id}`"
      >
        {{ item.name }}
      </span>
    </div>

    <div class="text-center">
      <h6>Technologies</h6>
      <span
        class="badge badge-custom text-bg-success"
        v-for="item in technologies"
        :key="`tech-${item.id}`"
      >
        {{ item.name }}
      </span>
    </div>
  </div>

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
.badge-custom {
  margin: 0 5px;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
