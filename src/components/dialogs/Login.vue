<template>
  <div>
    <base-button class="base-button" @click.stop="dialog = true"
      >Login</base-button
    >

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
                :valid="validOfficerID"
                v-model="formdata.officerID"
              ></base-input>
              <base-input
                type="password"
                placeholder="Password"
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
                placeholder="Officer ID"
                :valid="validOfficerID"
                v-model="formdata.officerID"
              ></base-input>
              <base-input
                type="password"
                placeholder="Password"
                :valid="validPassword"
                v-model="formdata.password"
              ></base-input>
              <base-input
                type="password"
                placeholder="Confirm Password"
                :valid="validPassCheck"
                v-model="formdata.passwordCheck"
              ></base-input>
              <base-input
                placeholder="First Name"
                :valid="validFirstName"
                v-model="formdata.firstName"
              ></base-input>
              <base-input
                placeholder="Last Name"
                :valid="validLastName"
                v-model="formdata.lastName"
              ></base-input>
              <base-input
                placeholder="Contact Number"
                :valid="validContactNumber"
                v-model="formdata.contactNumber"
              ></base-input>

              <base-input
                placeholder="Police Station"
                :valid="validPoliceStation"
                v-model="formdata.policeStation"
              ></base-input>

              <base-input
                placeholder="Email"
                :valid="validEmail"
                v-model="formdata.email"
              ></base-input>

              <base-input
                placeholder="NIC Number"
                :valid="validNIC"
                v-model="formdata.nic"
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
import { login, register } from "../../services/auth";
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
        officerID: "",
        password: "",
        passwordCheck: "",
        firstName: "",
        lastName: "",
        contactNumber: "",
        policeStation: "",
        email: "",
        nic: "",
        remember: false
      }
    };
  },
  computed: {
    validOfficerID: function() {
      if (this.formdata.officerID != "")
        return this.formdata.officerID.length == 6;
      else return null;
    },
    validPassCheck: function() {
      if (this.formdata.passwordCheck != "")
        return this.formdata.passwordCheck == this.formdata.password;
      else return null;
    },
    validFirstName: function() {
      if (this.formdata.firstName != "")
        return this.formdata.firstName.length > 4;
      else return null;
    },
    validLastName: function() {
      if (this.formdata.lastName != "")
        return this.formdata.lastName.length > 4;
      else return null;
    },
    validPassword: function() {
      if (this.formdata.password != "")
        return this.formdata.password.length > 6;
      else return null;
    },
    validContactNumber: function() {
      if (this.formdata.contactNumber != "")
        return this.formdata.contactNumber.length == 10;
      else return null;
    },
    validPoliceStation: function() {
      if (this.formdata.policeStation != "")
        return this.formdata.policeStation.length > 6;
      else return null;
    },
    validEmail: function() {
      if (this.formdata.email != "") {
        var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return valid.test(String(this.formdata.email).toLowerCase());
      } else return null;
    },
    validNIC: function() {
      if (this.formdata.nic != "") return this.formdata.nic.length == 10;
      else return null;
    }
  },
  methods: {
    resetForm() {
      this.formdata.officerID = "";
      this.formdata.password = "";
      this.formdata.firstName = "";
      this.formdata.lastName = "";
      this.formdata.contactNumber = "";
      this.formdata.policeStation = "";
      this.formdata.email = "";
      this.formdata.nic = "";
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

      register(
        this.formdata.officerID,
        this.formdata.password,
        this.formdata.firstName,
        this.formdata.lastName,
        this.formdata.contactNumber,
        this.formdata.policeStation,
        this.formdata.email,
        this.formdata.nic
      ).then(res => {
        console.log(res.data);
        setToken(res.data.data.token);
        this.$router.push({ path: "/console/analytics" });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.a-register:hover {
  color: blue;
}

.base-button {
  background-color: white;
  color: #003b46;
}
</style>
