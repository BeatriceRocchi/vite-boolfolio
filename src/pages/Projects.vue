<script>
import axios from "axios";
import { store } from "../data/store";

import ProjectCard from "../components/partials/ProjectCard.vue";
import Loader from "../components/partials/Loader.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default {
  name: "Projects",

  components: {
    ProjectCard,
    Loader,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      store,
      projects: [],
      types: [],
      technologies: [],
      isLoading: true,
    };
  },

  methods: {
    getApi(apiUrl, type = "") {
      this.isLoading = true;

      axios
        .get(apiUrl + type)
        .then((result) => {
          this.isLoading = false;
          switch (type) {
            case "types":
              this.types = result.data;
              break;

            case "technologies":
              this.technologies = result.data;
              break;

            default:
              this.projects = result.data;
              break;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.message);
        });
    },
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation],
    };
  },
  mounted() {
    this.getApi(store.apiUrl, "projects");
    this.getApi(store.apiUrl, "types");
    this.getApi(store.apiUrl, "technologies");
  },
};
</script>

<template>
  <div class="background-custom">
    <Loader v-if="isLoading" />

    <div v-else>
      <h2>My recent projects</h2>

      <div class="container">
        <div class="slider-wrapper">
          <swiper
            :pagination="{
              dynamicBullets: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              class="my-5"
              v-for="project in projects"
              :key="project.id"
            >
              <ProjectCard :projectObject="project" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-wrapper {
  margin: 0 auto;

  .mySwiper {
    padding: 0 50px;
  }
}
</style>
