<template>
    <div id="profile">
   <div>
    <v-app-bar color="grey accent-" dense dark>
      <v-toolbar-title>User Profile</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/console">Logout</router-link>

   </v-app-bar>
  </div>
  <h1 style="text-align:center;">fpay user profile</h1>

    <v-card class="mx-auto" max-width="600">
    <v-img height="200px" weight="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
      
    <v-card-text class="text--primary">
    <p> User name : </p>
    <p> Officer ID : </p>
    <p> first name : </p>
    <p> last name : </p>
    <p> ploce station : </p>
    <p> rank : </p>
    </v-card-text>

  </v-card>  
   
    </div>
</template>

<script>
    export default {
        name: 'profile',
        data() {
            return {
              
            };
        }
    }
</script>

<style scoped>
    #profile {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
    
    