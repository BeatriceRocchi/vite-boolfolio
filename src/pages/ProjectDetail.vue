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
  <div class="background-custom">
    <h2>{{ project.title }}</h2>
    <div class="container">
      <div class="project-box">
        <div class="img-box">
          <img :src="project.img" :alt="project.title" />
        </div>

        <div class="text-box">
          <p class="card-text">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(white, 20%);
  overflow: hidden;

  .img-box {
    width: 50%;
  }

  .text-box {
    width: 50%;
    padding: 20px 40px;
    align-self: flex-start;
  }
}
</style>
