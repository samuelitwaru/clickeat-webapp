<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">+New Address</v-btn>
    </template>

    <template v-slot:default="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          New Address
        </v-card-title>
        <v-card-text>
          <v-container>
            <div>
              <v-autocomplete
                outlined
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                flat
                hide-no-data
                hide-details
                label="Village"
              ></v-autocomplete>
              <v-textarea
                class="mt-4"
                outlined
                name="description"
                v-model="description"
                label="Description"
              ></v-textarea>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Cancel</v-btn>
          <v-btn color="primary" text @click='createAddress()'>Save</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      search: null,
      select: null,
      items: [],
      places: [],
      description: "",
    };
  },
  created() {
    this.getPlaces();
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },

  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.items.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },

    getPlaces() {
      this.$http
        .get(`${this.$apiUrl}/arua_places?platform=web`)
        .then((response) => {
          this.places = response.data;
          this.items = this.places.map((place) => {
            return place.village;
          });
        });
    },

    createAddress() {
      var customer_id = this.$store.getters.userId;
      var address = this.places[this.items.indexOf(this.select)]
      if (customer_id && address){
        var data = {
          county: address.county_name,
          sub_county: address.sub_county_name,
          village: address.village,
          other_details: this.description,
          is_default: false,
        }
        this.$http.post(`${this.$apiUrl}/add_address/${customer_id}?platform=web`, data)
        .then((response) => {
          this.$parent.addresses = response.data
        });
      }
    },
  },
};
</script>

<style>
</style>