<template>
  <div>
    <a @click.stop="dialog = true">Login</a>

    <v-dialog v-model="dialog" max-width="350" :persistent="isLocked">
      <!-- Login section -->
      <v-card color="blue-grey lighten-5" :loading="isLoading" v-if="loginForm">
        <v-card-title class="justify-center">
          <div class="mt-4">Welcome!</div>
        </v-card-title>
        <v-card-text class="justify-center">
          <div class="mt-4 mx-4">
            <form role="form">
              <base-input
                placeholder="Officer ID"
                addon-left-icon="ni ni-email-83"
                :valid="validID"
                v-model="formdata.officerID"
              ></base-input>
              <base-input
                type="password"
                placeholder="Password"
                addon-left-icon="ni ni-lock-circle-open"
                v-model="formdata.password"
              ></base-input>
              <base-checkbox v-model="formdata.remember"
                >Remember me</base-checkbox
              >
            </form>
            <div class="mt-4">
              <v-row class="justify-center">
                or&nbsp;
                <div class="a-register">
                  <a @click="toggleForm()">Register</a>
                </div>
              </v-row>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <div class="mb-10">
            <base-button @click="login()">Login</base-button>
          </div>
        </v-card-actions>
      </v-card>
      <!-- End of login section -->

      <!-- Register section -->
      <v-card
        color="blue-grey lighten-5"
        :loading="isLoading"
        v-if="!loginForm"
      >
        <v-card-title class="justify-center">
          <div class="mt-4">Welcome!</div>
        </v-card-title>
        <v-card-text class="justify-center">
          <div class="mt-4 mx-4">
            <form role="form">
              <base-input
                placeholder="Username"
                addon-left-icon="ni ni-circle-08"
                :valid="validUsername"
                v-model="formdata.username"
              ></base-input>
              <base-input
                placeholder="Officer ID"
                addon-left-icon="ni ni-email-83"
                :valid="validID"
                v-model="formdata.officerID"
              ></base-input>
              <base-input
                type="password"
                placeholder="Password"
                addon-left-icon="ni ni-lock-circle-open"
                :valid="validPassword"
                v-model="formdata.password"
              ></base-input>
              <base-checkbox v-model="formdata.remember"
                >Remember me</base-checkbox
              >
            </form>
            <div class="mt-4">
              <v-row class="justify-center">
                or&nbsp;
                <div class="a-register">
                  <a @click="toggleForm()">Login</a>
                </div>
              </v-row>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <div class="mb-10">
            <base-button @click="register()">Register</base-button>
          </div>
        </v-card-actions>
      </v-card>
      <!-- End of register section -->
    </v-dialog>
  </div>
</template>

<script>
import { login } from "../../services/auth";
import { setToken } from "../../services/jwt";

export default {
  name: "login",
  data() {
    return {
      dialog: false,
      loginForm: true,
      isLoading: false,
      isLocked: false,
      formdata: {
        username: "",
        officerID: "",
        password: "",
        remember: false
      }
    };
  },
  computed: {
    validUsername: function() {
      if (this.formdata.username != "")
        return this.formdata.username.length > 4;
      else return null;
    },
    validID: function() {
      if (this.formdata.officerID != "") {
        return this.formdata.officerID.length == 6;
      } else return null;
    },
    validPassword: function() {
      if (this.formdata.password != "")
        return this.formdata.password.length > 6;
      else return null;
    }
  },
  methods: {
    resetForm() {
      this.formdata.username = "";
      this.formdata.officerID = "";
      this.formdata.password = "";
      this.formdata.remember = "";
    },
    toggleForm() {
      this.resetForm();
      this.loginForm = !this.loginForm;
    },
    login() {
      this.isLoading = "blue";
      this.isLocked = true;
      console.log(this.formdata);

      login(this.formdata.officerID, this.formdata.password).then(res => {
        setToken(res.data.data.token);
        this.$router.push({ path: "/console/analytics" });
      });
    },
    register() {
      this.isLoading = "blue";
      this.isLocked = true;
      console.log(this.formdata);
    }
  }
};
</script>

<style lang="scss" scoped>
.a-register:hover {
  color: blue;
}
</style>
