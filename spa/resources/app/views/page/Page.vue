<template>
	<div class="theme-layout">
		<div class="postoverlay"></div>
		<Navbar />

		<!--	For MENU	-->
		<SidebarLeft />

		<!--	For Messages	-->
		<SidebarRight />

		<section>
			<div class="gap2 gray-bg">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="row merged20" id="page-contents">
								<div class="user-profile">
									<figure>
										<div class="edit-pp">
											<label class="fileContainer">
												<i class="fa fa-camera"></i>
												<input type="file">
											</label>
										</div>
										<img src="/static/images/resources/profile-image.jpg" alt="">
										<ul class="profile-controls">
											<li><a href="#" title="Add friend" data-toggle="tooltip"><i class="fa fa-user-plus"></i></a></li>
											<li><a href="#" title="Follow" data-toggle="tooltip"><i class="fa fa-star"></i></a></li>
											<li><a class="send-mesg" href="#" title="Send Message" data-toggle="tooltip"><i class="fa fa-comment"></i></a></li>
											<li>
												<div class="edit-seting" title="Edit Profile image"><i class="fa fa-sliders"></i>
													<ul class="more-dropdown">
														<li><a href="setting.html" title="">Update Profile Photo</a></li>
														<li><a href="setting.html" title="">Update Header Photo</a></li>
														<li><a href="setting.html" title="">Account Settings</a></li>
														<li><a href="support-and-help.html" title="">Find Support</a></li>
														<li><a class="bad-report" href="#" title="">Report Profile</a></li>
														<li><a href="#" title="">Block Profile</a></li>
													</ul>
												</div>
											</li>
										</ul>
										<ol class="pit-rate">
											<li class="rated"><i class="fa fa-star"></i></li>
											<li class="rated"><i class="fa fa-star"></i></li>
											<li class="rated"><i class="fa fa-star"></i></li>
											<li class="rated"><i class="fa fa-star"></i></li>
											<li class=""><i class="fa fa-star"></i></li>
											<li>4.7/5</li>
										</ol>
									</figure>

									<div class="profile-section">
										<div class="row">
											<div class="col-lg-2 col-md-3">
												<div class="profile-author">
													<div class="profile-author-thumb">
														<img alt="author" src="/static/images/resources/author.jpg">
														<div class="edit-dp">
															<label class="fileContainer">
																<i class="fa fa-camera"></i>
																<input type="file">
															</label>
														</div>
													</div>

													<div class="author-content">
														<a class="h4 author-name" href="#">Jack Carter</a>
														<div class="country">Ontario, CA</div>
													</div>
												</div>
											</div>
											<div class="col-lg-10 col-md-9">
												<ul class="profile-menu">
													<li>
														<router-link :to="{ name: 'page', params: { slug: $route.params.slug } }">Page Feed</router-link>
													</li>
													<li>
														<router-link :to="{ name: 'page-followers', params: { slug: $route.params.slug } }">Followers</router-link>
													</li>
													<li>
														<router-link :to="{ name: 'page-events', params: { slug: $route.params.slug } }">Events</router-link>
													</li>
												</ul>
												<ol class="folw-detail">
													<li><span>Posts</span><ins>101</ins></li>
													<li><span>Followers</span><ins>1.3K</ins></li>
													<li><span>Following</span><ins>22</ins></li>
												</ol>
											</div>
										</div>
									</div>
								</div><!-- user profile banner  -->


								<router-view></router-view>


							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from "@/components/authenticated/Navbar";
import SidebarLeft from "@/components/authenticated/SidebarLeft";
import SidebarRight from "@/components/authenticated/SidebarRight";


export default Vue.extend({
	name: "Page",

	components: { Navbar, SidebarLeft, SidebarRight }

})
</script>
