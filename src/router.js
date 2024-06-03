import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Resume from "./pages/Resume.vue";
import Contacts from "./pages/Contacts.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error404",
      component: Error404,
    },
  ],
});

export { router };