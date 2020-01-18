<template>
    <div id="profile">
    <div class="row">
  <div class="col-sm-6">
     
       <v-avatar size="300">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="User avatar here"
              />
            </v-avatar>
    
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body bg-dark" >
        <v-card-text class="text-white">
    <p> User name : </p>
    <p> Officer ID : </p>
    <p> first name : </p>
    <p> last name : </p>
    <p> ploce station : </p>
    <p> rank : </p>
    </v-card-text>
      </div>
    </div>
  </div>
</div> 


<h3>fines issued by officer </h3>
  <v-simple-table dark fixed-header height="300px" >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Location</th>
          <th class="text-left">Fine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>colombo</td>
          <td>issued a fine</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
    
    