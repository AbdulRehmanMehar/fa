<template>
	<div class="friend-block">
		<div class="more-opotnz">
			<i class="fa fa-ellipsis-h"></i>
			<ul>
				<li><a href="#" title="">Block</a></li>
				<li><a href="#" title="">UnBlock</a></li>
				<li><a href="#" title="">Mute Notifications</a></li>
				<li><a href="#" title="">hide from friend list</a></li>
			</ul>
		</div>
		<figure>
			<img src="/static/images/resources/frnd-figure10.jpg" alt="">
		</figure>

		<div class="frnd-meta">
			<div class="frnd-name">
				<a href="#" title="">George</a>
				<span>Los Angeles, CA</span>
			</div>
			<a class="send-mesg" href="#" title="">Message</a>
		</div>
	</div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: 'ProfileBox',
})
</script>
