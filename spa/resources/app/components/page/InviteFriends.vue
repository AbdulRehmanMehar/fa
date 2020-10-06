<template>
	<div class="widget">
		<h4 class="widget-title">Invite Friends <a class="see-all" href="#" title="">See All</a></h4>
		<ul class="invitepage">
			<li>
				<figure>
					<img src="/static/images/resources/friend-avatar.jpg" alt="">
					<a href="">Jack carter</a>
				</figure>
				<a class="invited" href="#" title=""><i class="ti-check"></i></a>
			</li>
			<li>
				<figure>
					<img src="/static/images/resources/friend-avatar2.jpg" alt="">
					<a href="">Emma watson</a>
				</figure>
				<a href="#" title="">Invite</a>
			</li>
			<li>
				<figure>
					<img src="/static/images/resources/friend-avatar3.jpg" alt="">
					<a href="">Andrew</a>
				</figure>
				<a href="#" title="">Invite</a>
			</li>
			<li>
				<figure>
					<img src="/static/images/resources/friend-avatar4.jpg" alt="">
					<a href="">Moona Singh</a>
				</figure>
				<a class="invited" href="#" title=""><i class="ti-check"></i></a>
			</li>
			<li>
				<figure>
					<img src="/static/images/resources/friend-avatar5.jpg" alt="">
					<a href="">Harry pooter</a>
				</figure>
				<a href="#" title="">Invite</a>
			</li>
		</ul>

	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: "InviteFriends",
})
</script>