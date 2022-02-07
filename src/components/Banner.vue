<template>
    <div class="banner-image">
        <div class="banner-text">
            <h2 style="font-size:50px">Order Your Meal Now</h2>
            <router-link to='/search'>
			<v-text-field label="Search Meal" solo></v-text-field>
            </router-link>
			<div class="d-flex justify-center px-auto">
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
		background-color: #ff4800;
		height: 500px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.banner-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>