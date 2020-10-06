<template>
	<div class="theme-layout">
		<div class="postoverlay"></div>
		<Navbar />

		<section>
			<div class="gray-bg">
				<section>
					<div class="page-header">
						<div class="header-inner">
							<h2>Forum</h2>
							<p>
								Welcome to Pitnik Social Network. This page is for the community where user can put some technicial questions about the pitnik policies.
							</p>
						</div>
						<figure><img src="/static/images/resources/baner-forum.png" alt=""></figure>
					</div>
				</section>

				<section>
					<div class="gap gray-bg">
						<div class="container">
							<div class="row merged20">

								<div class="col-lg-9">
									<router-view></router-view>
								</div>

								<div class="col-lg-3">
									<div class="sidebar static right">
										<ForumStatics />
										<FeaturedTopics />
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
			</div>
		</section>

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from "@/components/authenticated/Navbar";
import Footer from "@/components/Footer.vue";
import ForumStatics from "@/components/forum/ForumStatics.vue";
import FeaturedTopics from "@/components/forum/FeaturedTopics.vue";

export default Vue.extend({
	name: "Forum",
	components: { Navbar, ForumStatics, FeaturedTopics, Footer }
})
</script>