<template>
	<div class="widget">
		<h4 class="widget-title">Share Page</h4>
		<ul class="socials">
			<li class="facebook">
				<a title="" href="#"><i class="fa fa-facebook"></i> <span>facebook</span> <ins>45 likes</ins></a>
			</li>
			<li class="twitter">
				<a title="" href="#"><i class="fa fa-twitter"></i> <span>twitter</span><ins>25 likes</ins></a>
			</li>
			<li class="google">
				<a title="" href="#"><i class="fa fa-google"></i> <span>google</span><ins>35 likes</ins></a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: "Share",
})
</script>