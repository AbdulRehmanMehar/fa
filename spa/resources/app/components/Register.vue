<template>
	<div class="we-login-register">
		<div class="form-title">
			<i class="fa fa-key"></i>Sign Up
			<span>Sign Up now and meet the awesome friends around the world.</span>
		</div>
		<form class="we-form" method="post">
			<input type="text" placeholder="Email">
			<input type="password" placeholder="Password">
			<input type="text" placeholder="+1234-567-987">
			<input type="checkbox"><label>Send code to Mobile</label>
			<button type="submit" data-ripple="">Register</button>
			<a class="forgot underline" href="#" title="">forgot password?</a>
		</form>
		<a data-ripple="" title="" href="#" class="with-smedia facebook"><i class="fa fa-facebook"></i></a>
		<a data-ripple="" title="" href="#" class="with-smedia twitter"><i class="fa fa-twitter"></i></a>
		<a data-ripple="" title="" href="#" class="with-smedia instagram"><i class="fa fa-instagram"></i></a>
		<a data-ripple="" title="" href="#" class="with-smedia google"><i class="fa fa-google-plus"></i></a>
		<span>already have an account? <router-link class="we-account underline" :to="{name: 'login'}" title="">Sign in</router-link></span>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: 'Register',

	mounted() {
		console.log('mounted register')
	}
})
</script>

