<template>
    <div class="banner-image">
        <div class="banner-text">
            <h2 style="font-size:40px">Order Your Meal Now</h2>
			<div class='my-2' align='center'>
				<router-link to='/search' >
				<v-text-field label="Search Meal" solo style="width:30rem"></v-text-field>
				</router-link>
			</div>
			<div class='my-2'>
				<a href="tel:0785857000"><v-btn color="primary" outlined><v-icon>mdi-phone</v-icon> Call To Order</v-btn></a>
			</div>
			<div class="d-flex justify-center px-auto" v-if='!$store.getters.loggedIn'>
				<router-link to='/signup'>
					<v-btn plain class='px-0' color="primary">Signup</v-btn>
				</router-link>
				<span class="mx-4 my-auto"> or </span>
				<router-link to='/signin'>
					<v-btn color="primary" dark>Signin</v-btn>
				</router-link>
			</div>
		</div>
		<div>
		</div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
	.banner-image {
		background-image: url("../assets/banner3.png");
		background-color: #f5d1c3;
		height: 500px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.banner-text {
		width: 90%;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>