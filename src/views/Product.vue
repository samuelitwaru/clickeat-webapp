<template>
  <div>
    <div class="pa-2" v-if="product">
      <v-row>
        <v-col cols="md-3">
          <v-card
            class="my-0"
          >
            <v-img
            height="250"
            :src="`${$staticUrl}/product_images/${product.product_picture}`"
            ></v-img>
            <v-card-title style="font-size: 14px;">{{ product.name }}</v-card-title>
            <v-card-subtitle class="mx-auto">
              <p align="right" v-if="discount">
              <strike style="color:red; font-size:11px; font-weight:bold;">
                {{ product.price | currency }}
              </strike> | <b>{{ discount }}% OFF</b>
              </p>
              <p align="right"><b>{{ price | currency }}</b></p>
              <v-divider class="mx-2"></v-divider>
            </v-card-subtitle>
            

            <v-row
              align="center"
              class="mx-0 my-0"
            >
              <v-row>
                <v-col class="md-8">
                  <div class="grey--text ms-4" style="font-size: 10px; font-family:'Courier New', Courier, monospace;">
                  {{ product.resturant }}
                  </div>
                </v-col>
                <v-col class="md-4">
                  <v-rating
                  v-model="currentRating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                  ></v-rating>
                </v-col>
              </v-row>
            </v-row>

            <v-list-item-content align="center" class="ma-0 pa-2">
              <!-- <div class="text-overline mb-4"></div> -->
              <!-- <v-list-item-subtitle>{{product.description}}</v-list-item-subtitle> -->
              <v-btn rounded color="primary" dark @click="addToCart()"
                ><v-icon>mdi-cart</v-icon> Add</v-btn
              >
            </v-list-item-content>
          
          </v-card>
        </v-col>
        <v-col cols="md-9">
          <v-card
            class="pa-2"
          >
            <h3>Rate Product</h3>
            <v-rating
              background-color="primary lighten-3"
              color="primary"
              large
              v-model="rating"
              @input="rateProduct()"
            ></v-rating>
            <h3>Description</h3>
            <p style="font-family:'Courier New', Courier, monospace;">{{ product.description }}</p>

            <h3>Comments</h3>
            <div v-if="comments.length" class="my-2">
              <v-card
                outlined
                class="my-1 py-2"
                v-for="comment in comments"
                :key="comment.id"
              >
                <v-card-text class="py-0">
                  <strong>{{ comment.customerNames }}</strong>
                  <p class="my-auto">{{ comment.comment }}</p>
                  <small>{{ comment.date }}</small>
                </v-card-text>
              </v-card>
            </div>
            <p v-else class="grey--text">No comments</p>
            <v-textarea
              solo
              name="input-7-4"
              label="Write a comment"
              v-model="comment"
            ></v-textarea>
            <v-btn
              :disabled="!comment.trim()"
              color="primary"
              @click="createComment()"
              >Comment</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
      
      
      <!-- <v-row>
        <v-col cols="md-6">
          <v-card class="mx-auto" outlined>
            <v-list-item-title class="text-h5 pa-2">
              {{ product.name }}
            </v-list-item-title>
            <v-list-item three-line>
              <v-img
                :src="`${$staticUrl}/product_images/${product.product_picture}`"
                width="80"
                class="rounded-circle"
              >
              </v-img>
              <v-list-item-content align="center" class="ma-0 pa-2">
                <p v-if="discount">
                  <strike>{{ product.price | currency }} </strike
                  >{{ discount }}% OFF
                </p>
                <p>{{ price | currency }}</p>
                <v-btn rounded color="primary" dark @click="addToCart()"
                  ><v-icon>mdi-cart</v-icon> Add</v-btn
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-rating
                v-model="currentRating"
                color="primary"
                background-color="primary lighten-3"
                readonly
                size="18"
              ></v-rating>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6">
          <h3>Description</h3>
          <p>{{ product.description }}</p>
        </v-col>
        <v-col cols="12">
          Rate Product
          <v-rating
            background-color="primary lighten-3"
            color="primary"
            large
            v-model="rating"
            @input="rateProduct()"
          ></v-rating>
        </v-col>
        <v-col cols="12">
          <h3>Comments</h3>
          <div v-if="comments.length" class="my-2">
            <v-card
              outlined
              class="my-1 py-2"
              v-for="comment in comments"
              :key="comment.id"
            >
              <v-card-text class="py-0">
                <strong>{{ comment.customerNames }}</strong>
                <p class="my-auto">{{ comment.comment }}</p>
                <small>{{ comment.date }}</small>
              </v-card-text>
            </v-card>
          </div>
          <p v-else class="grey--text">No comments</p>
          <v-textarea
            solo
            name="input-7-4"
            label="Write a comment"
            v-model="comment"
          ></v-textarea>
          <v-btn
            :disabled="!comment.trim()"
            color="primary"
            @click="createComment()"
            >Comment</v-btn
          >
        </v-col>
      </v-row> -->
      <recently-viewed />
      <sub-cat-products v-bind:products="subCatProducts"></sub-cat-products>

      <!-- Get products from the same subgategory -->

    </div>
  </div>
</template>

<script>
import RecentlyViewed from "../components/RecentlyViewed.vue";
import SubCatProducts from "../components/subCatProducts.vue";
export default {
  components: { RecentlyViewed, SubCatProducts },
  data() {
    return {
      product: null,
      rating: 0,
      comments: [],
      comment: "",
      currentRating: 0,
      subCatProducts: []
    };
  },

  computed: {
    discount() {
      if (this.product.promotional_price) {
        return Math.round(
          ((this.product.price - this.product.promotional_price) /
            this.product.price) *
            100
        );
      }
      return null;
    },

    price() {
      return this.product.promotional_price || this.product.price;
    },
  },

  created() {
    this.getProduct();
  },

  watch: {
    "$route.params": {
      handler(newValue) {
        newValue
        this.getProduct();
      },
      immediate: true,
    },
  },

  methods: {
    getProduct() {
      this.$http
        .get(
          `${this.$apiUrl}/get_product/${this.$route.params.id}?platform=web`
        )
        .then((response) => {
          this.product = response.data;
          this.getProductComments();
          this.getProductRating();
          this.registerProductToRecentlyViewed();
          this.getSubCatProducts();
        });
    },

    getProductRating() {
      console.log(
        `${this.$apiUrl}/rate_product/${this.product.product_id}?platform=web`
      );
      this.$http
        .get(
          `${this.$apiUrl}/rate_product/${this.product.product_id}?platform=web`
        )
        .then((response) => {
          this.currentRating = response.data.rate;
          console.log(this.currentRating);
        });
    },

    getProductComments() {
      this.$http
        .get(
          `${this.$apiUrl}/product_comments/${this.product.product_id}?platform=web`
        )
        .then((response) => {
          this.comments = response.data;
          console.log(this.comments);
        });
    },

    registerProductToRecentlyViewed() {
      var recentlyViewed = localStorage.getItem("recentlyViewed");
      if (!recentlyViewed) {
        localStorage.setItem("recentlyViewed", "[]");
        this.registerProductToRecentlyViewed();
        return;
      }
      recentlyViewed = JSON.parse(recentlyViewed);
      recentlyViewed = recentlyViewed
        .filter((product) => this.product.product_id != product.product_id)
        .slice(0, 4);
      recentlyViewed.push(this.product);
      localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
    },

    createComment() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        var data = {
          comment: this.comment.trim(),
          productId: this.product.product_id,
        };
        if (data.comment) {
          this.$http
            .post(
              `${this.$apiUrl}/product_comments/${customer_id}?platform=web`,
              data
            )
            .then((response) => {
              this.comments = response.data;
              console.log(this.comments);
            });
        }
      } else {
        this.$store.state.showSigninModal = true;
      }
    },

    rateProduct() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        var data = {
          rate: this.rating,
          customerID: customer_id,
        };
        this.$store.state.overlay = true;
        this.$http
          .post(
            `${this.$apiUrl}/rate_product/${this.product.product_id}?platform=web`,
            data
          )
          .then((response) => {
            this.currentRating = response.data.rate;
            this.$store.state.overlay = false;
          });
      } else {
        this.rating = 0;
        this.$store.state.showSigninModal = true;
      }
    },

    addToCart() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        var data = {
          product_id: this.product.product_id,
          customer_id: customer_id,
          product_name: this.product.name,
          product_image: this.product.product_picture,
          unit_price: this.price,
          quantity: 1,
          free_delivery: false,
          restaurant: this.product.resturant,
        };

        this.$store.state.overlay = true;
        this.$http
          .post(`${this.$apiUrl}/addToCart?platform=web`, data)
          .then((response) => {
            this.$store.state.overlay = false;
            this.$alert(
              "Alert",
              response.data.message,
              "Proceed To Cart",
              "/cart"
            );
          });
      } else {
        this.$store.state.showSigninModal = true;
      }
    },

    getSubCatProducts(){
      this.$http
          .get(
            `${this.$apiUrl}/sub_cat_products/${this.product.sub_category_id}?platform=web`
          )
          .then((response) => {
          this.subCatProducts = response.data;
        });
    }
  },
};
</script>

<style>
</style>