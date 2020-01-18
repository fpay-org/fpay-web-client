<template>
  <div>
    <v-container>
      <div>
        <h1>
          Recent News
        </h1>
        <div class="vertical-spacer"></div>

    <div>
      <base-dropdown title="District" class="btn-filter">
        <div class="nav-filter" @click="onFilterAdd()">
             <div v-for="name in dropdown" :key="name">
            <v-list-item link @click="onDropClick(name)">
              <v-list-item-title>{{ name }}</v-list-item-title>
            </v-list-item>
          </div>
      </div>
      
      </base-dropdown>
    </div>

    <div class="vertical-spacer"></div>

      <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
    ></v-img>

    <v-card-title>
      News Headling
    </v-card-title>
    <v-card-subtitle>Mon, 12:30 PM, 2019 </v-card-subtitle>

   <v-card-text>
       <p> Colombo (News 1st): The gazette notification increasing the minimum fine for 7 traffic offences to Rs. 25,000, was issued at midnight yesterday (April 1).
The Ministry of Transport says the Gazette will be presented in parliament in the near future and enacted into law.
The Ministry of Transport highlights that most fatal road accidents can be attributed to violations of motor traffic laws.</p><p>
According to the Gazette notice, the current fine of between Rs. 3,000 to 6,000 for driving without a valid license, will be increased to between Rs. 25,000 and 30,000 for the first offence and between Rs. 30,000 and 50,000 for the second offence.
The fine for employing a driver without a valid driver’s license will also be between Rs. 25,000 and 30,000 for the first offence and between Rs. 30,000 and 50,000 for the second offence.
The punishment for driving under the influence of alcohol has also been revised to a fine of between Rs. 25,000 and 30,000 and a suspension of the offender’s driving license for up to 12 months.
The offender can also be sentenced to imprisonment for up to 3 months.
Punishment has also been introduced for persons who transport passengers whilst driving under the influence of alcohol. This includes a fine of between Rs. 25,000 and 30,000, cancellation of the driver’s license and a prison sentence of up to 6 months.</p>
        </v-card-text>

  </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "news",
  data: () => ({
  dropdown: ["Colombo", "Anuradapura","Jaffana","Matara","Gampaha","Kandy","Galle","Kaluthara","Puttlam"]
  }),

};
</script>

<style lang="scss" scoped></style>
