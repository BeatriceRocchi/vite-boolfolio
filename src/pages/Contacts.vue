<script>
import axios from "axios";
import { store } from "../data/store";
import Loader from "@/components/partials/Loader.vue";

export default {
  name: "Contacts",
  components: {
    Loader,
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      message: "",

      isLoading: false,
      isSent: false,

      errors: {
        name: [],
        surname: [],
        email: [],
        message: [],
      },
    };
  },
  methods: {
    sendEmail() {
      this.isLoading = true;
      const formData = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        message: this.message,
      };
      axios
        .post(store.apiUrl + "send-email", formData)
        .then((result) => {
          this.isLoading = false;
          if (!result.data.success) {
            this.errors = result.data.errors;
          } else {
            this.errors = {
              name: [],
              surname: [],
              email: [],
              message: [],
            };
            this.isSent = true;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error.message);
        });
    },
  },
};
</script>

<template>
  <h2>Keep in touch</h2>

  <div class="container w-50">
    <div v-if="!isLoading">
      <form v-if="!isSent" @submit.prevent="sendEmail()">
        <div class="row">
          <div class="col-4">
            <label for="name" class="form-label">First name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              placeholder="First name"
              aria-label="First name"
            />
            <p class="text-danger">{{ errors.name.toString() }}</p>
          </div>

          <div class="col-4">
            <label for="surname" class="form-label">Last name</label>
            <input
              type="text"
              class="form-control"
              id="surname"
              v-model="surname"
              placeholder="Last name"
              aria-label="Last name"
            />
            <p class="text-danger">{{ errors.surname.toString() }}</p>
          </div>

          <div class="col-4">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Email"
              aria-label="Email"
            />
            <p class="text-danger">{{ errors.email.toString() }}</p>
          </div>

          <div class="col-12 my-3">
            <label for="message" class="form-label">Add your message</label>
            <textarea
              class="form-control"
              id="message"
              v-model="message"
              rows="3"
            >
            </textarea>
            <p class="text-danger">{{ errors.message.toString() }}</p>
          </div>
        </div>

        <button class="btn btn-custom-primary" type="submit">Send</button>
      </form>

      <h5 class="text-center fw-normal" v-else>
        Thank you! <br />
        Your email has been successfully sent.
      </h5>
    </div>
    <Loader v-else />
  </div>
</template>

<style lang="scss" scoped></style>
