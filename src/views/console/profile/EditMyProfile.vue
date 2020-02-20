<template>
  <v-container>
    <div class="row header-row">
      <h1>Edit profile</h1>
      <v-spacer></v-spacer>
      <v-btn icon @click="onCancel()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn icon color="blue" @click="onSubmit()">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </div>

    <div v-if="isLoading"></div>

    <div v-if="!isLoading">
      <div class="row justify-center">
        <v-avatar size="300">
          <img :src="me.avatar_url" alt="User avatar here" />
        </v-avatar>
        <v-avatar color="#00000088" class="overlay" size="300">
          <div class="upload-btn-wrapper">
            <!-- <button class="btn">Upload a file</button> -->
            <v-icon class="icon-upload">mdi-upload</v-icon>
            <input
              type="file"
              ref="file"
              name="upload_image"
              @change="onUpload()"
            />
          </div>
        </v-avatar>
      </div>
      <div class="vertical-spacer-lg"></div>
      <v-card outlined>
        <v-card-text>
          <form role="form">
            <base-input
              placeholder="Officer ID"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.officer_id"
            ></base-input>
            <base-input
              placeholder="First Name"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.first_name"
            ></base-input>
            <base-input
              placeholder="Last Name"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.last_name"
            ></base-input>
            <base-input
              placeholder="Permission Level"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.permission_level"
            ></base-input>
            <base-input
              placeholder="Police Station"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.police_station"
            ></base-input>
            <base-input
              placeholder="NIC Number"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.nic"
            ></base-input>
            <base-input
              placeholder="Contact Number"
              :valid="validUsername"
              v-model="me.contact_number"
            ></base-input>
            <base-input
              placeholder="Email"
              :valid="validUsername"
              v-model="me.email"
            ></base-input>
          </form>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { getToken } from "../../../services/jwt";
import { me } from "../../../services/auth";
import { updateOfficer } from "../../../services/admin";

export default {
  name: "EditMyProfile",
  data() {
    return {
      isLoading: true,
      me: null
    };
  },
  computed: {
    validUsername() {
      if (this.hasPermissions) {
        // Write edit logic
      }
      return null;
    },
    hasPermissions() {
      return this.me.permission_level > 0 ? true : false;
    }
  },
  methods: {
    fetchMe() {
      const token = getToken();
      me(token)
        .then(res => {
          this.me = res.data.data;
          this.isLoading = false;
        })
        .catch(err => console.log(err));
    },
    onCancel() {
      this.$router.push({ path: "/console/me" });
    },
    onSubmit() {
      updateOfficer(this.me).then(res => {
        console.log(res.data.data);
      });
    },
    onUpload() {
      const file = this.$refs.file.files[0];
      console.log(file);

      let formData = new FormData();
      formData.append("officer_image", file);

      // Upload image
    }
  },
  created() {
    this.fetchMe();
  }
};
</script>

<style lang="scss" scoped>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.card-content {
  margin: 1px;
}

.card-subtitle {
  font-size: 16px;
}

.header-row {
  margin: 1px;
}

.overlay {
  position: absolute;
}

.icon-upload {
  color: white;
  font-size: 40px;
  cursor: pointer;
}
</style>
