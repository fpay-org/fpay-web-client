<template>
  <div>
    <div class="back"></div>
    <div class="spacer"></div>
    <div class="login row justify-center">
      <login></login>
    </div>
  </div>
</template>

<script>
import login from "../components/dialogs/Login";

export default {
  name: "home",
  components: {
    login
  }
};
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: #003b46;
}

.spacer {
  height: 380px;
}

.spacer-bottom {
  height: 200px;
}
</style>
