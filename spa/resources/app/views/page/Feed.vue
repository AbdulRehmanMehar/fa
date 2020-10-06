<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<div class="sidebar static left">
					<Community />
					<TwitterFeed />
				</div>
			</div>

			<div class="col-lg-6">
				<CreatePost />
				<Post />

				<LoadMore />
			</div>

			<div class="col-lg-3">
				<div class="sidebar static right">
					<Intro />
					<InviteFriends />
					<Share />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Post from "@/components/post/Post.vue";
import Intro from "@/components/page/Intro.vue";
import Share from "@/components/page/Share.vue";
import LoadMore from "@/components/LoadMore.vue";
import CreatePost from "@/components/post/Create.vue";
import Community from "@/components/page/Community.vue";
import TwitterFeed from "@/components/page/TwitterFeed.vue";
import InviteFriends from "@/components/page/InviteFriends.vue";

export default Vue.extend({
	name: "Feed",
	components: { Intro, Share, Community, TwitterFeed, InviteFriends, CreatePost, Post, LoadMore}
})
</script>
