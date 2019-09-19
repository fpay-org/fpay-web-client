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
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
                :valid="validEmail"
                v-model="formdata.email"
              ></base-input>
              <base-input
                type="password"
                placeholder="Password"
                addon-left-icon="ni ni-lock-circle-open"
                v-model="formdata.password"
              ></base-input>
              <base-checkbox v-model="formdata.remember">Remember me</base-checkbox>
            </form>
            <div class="mt-4">
              <v-row class="justify-center">
                or&nbsp
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
      <v-card color="blue-grey lighten-5" :loading="isLoading" v-if="!loginForm">
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
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
                :valid="validEmail"
                v-model="formdata.email"
              ></base-input>
              <base-input
                type="password"
                placeholder="Password"
                addon-left-icon="ni ni-lock-circle-open"
                :valid="validPassword"
                v-model="formdata.password"
              ></base-input>
              <base-checkbox v-model="formdata.remember">Remember me</base-checkbox>
            </form>
            <div class="mt-4">
              <v-row class="justify-center">
                or&nbsp
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
export default {
  name: "Login",
  data() {
    return {
      dialog: false,
      loginForm: true,
      isLoading: false,
      isLocked: false,
      formdata: {
        username: "",
        email: "",
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
    validEmail: function() {
      if (this.formdata.email != "") {
        var valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return valid.test(String(this.formdata.email).toLowerCase());
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
      this.formdata.email = "";
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