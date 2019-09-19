<template>
  <div>
    <a @click.stop="dialog = true">Login</a>

    <v-dialog v-model="dialog" max-width="350">
      <v-card color="blue-grey lighten-5">
        <v-card-title class="justify-center">
          <div class="mt-4">Welcome!</div>
        </v-card-title>
        <v-card-text class="justify-center">
          <div class="mt-4 mx-4">
            <form role="form">
              <base-input
                alternative
                class="mb-3"
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
              ></base-input>
              <base-input
                alternative
                type="password"
                placeholder="Password"
                addon-left-icon="ni ni-lock-circle-open"
              ></base-input>
              <base-checkbox>Remember me</base-checkbox>
            </form>
            <div class="mt-4">
              <v-row class="justify-center">
                or&nbsp
                <div class="a-register">
                  <a>Register</a>
                </div>
              </v-row>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <div class="mb-4">
            <base-button>Login</base-button>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
.a-register:hover {
  color: blue;
}
</style>