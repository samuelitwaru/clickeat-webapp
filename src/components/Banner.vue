<template>
    <div class="banner-image curved-bottom-right">
        <div class="banner-text">
            <h2 style="font-size:40px;">Order Delicacies at Your Convenience</h2>
			<div class='my-2' align='centr'>
				<!-- <router-link to='/search' > -->
				<v-text-field label="eg pizza" v-model="searchString" solo style="width:30rem" @keyup.enter='search()'>
					<template slot='append'>
						<v-icon>search</v-icon>
					</template>	
				</v-text-field>
				<!-- </router-link> -->
			</div>
		
			<div class="d-flex justify-centr px-auto" v-if='!$store.getters.loggedIn'>
				<router-link to='/signup'>
					<v-btn plain class='px-0' color="primary">Signup</v-btn>
				</router-link>
				<span class="mx-4 my-auto"> or </span>
				<router-link to='/signin'>
					<v-btn color="primary" dark>Signin</v-btn>
				</router-link>
			</div>
			<br>
			<div>
				<a href="tel:+256785857000"><v-btn color="yellow" outlined><v-icon>mdi-phone</v-icon> Call To Order</v-btn></a>
			</div>
		</div>
		<div>
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			searchString: '',
		}
	},
	methods: {
		search() {
			this.$router.push({name:'Search', params: {searchString:this.searchString}})
		},
	},
}
</script>

<style>
	.banner-image {
		background-image: url("../assets/wp2186059.jpg");
		background-color: #555353;
		color: rgb(255, 255, 34);
		height: 500px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.banner-text {
		width: 60%;
		/* text-align: center; */
		position: absolute;
		top: 50%;
		left: 40%;
		transform: translate(-50%, -50%);
	}
	
</style>