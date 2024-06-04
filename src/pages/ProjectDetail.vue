<script>
import axios from "axios";
import { store } from "@/data/store";

export default {
  name: "projectDetail",
  data() {
    return {
      project: {},
    };
  },
  methods: {
    getApi(slug) {
      axios
        .get(store.apiUrl + "project-detail/" + slug)
        .then((result) => {
          this.project = result.data.project;
          console.log(this.project);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    getImgPath(img) {
      return "http://127.0.0.1:8000" + img;
    },
  },
  computed: {
    type() {
      if (this.project.type) {
        return this.project.type.name;
      } else {
        return "No type";
      }
    },
  },
  mounted() {
    this.getApi(this.$route.params.slug);
  },
};
</script>

<template>
  <div class="container">
    <div class="card-container">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="getImgPath(project.img)"
              class="img-fluid rounded-start"
              :alt="project.title"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>

              <p class="card-text">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
}
</style>
