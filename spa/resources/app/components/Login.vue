<template>
	<div class="we-login-register">
		<div class="form-title">
			<i class="fa fa-key"></i>login
			<span>sign in now and meet the awesome Friends around the world.</span>
		</div>
		<form class="we-form" method="post">
			<input type="text" placeholder="Email">
			<input type="password" placeholder="Password">
			<input type="checkbox"><label>remember me</label>
			<button type="submit" data-ripple="">sign in</button>
			<a class="forgot underline" href="#" title="">forgot password?</a>
		</form>
		<a class="with-smedia facebook" href="#" title="" data-ripple=""><i class="fa fa-facebook"></i></a>
		<a class="with-smedia twitter" href="#" title="" data-ripple=""><i class="fa fa-twitter"></i></a>
		<a class="with-smedia instagram" href="#" title="" data-ripple=""><i class="fa fa-instagram"></i></a>
		<a class="with-smedia google" href="#" title="" data-ripple=""><i class="fa fa-google-plus"></i></a>
		<span>don't have an account? <router-link class="we-account underline" :to="{ name: 'register' }" title="">register now</router-link></span>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: 'Login',

	mounted() {
		console.log('mounted login')
	}
})
</script>

