<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<aside class="sidebar static">
					<div class="widget">
						<h4 class="widget-title">Shortcuts</h4>
						<ul class="naves">
							<li>
								<i class="ti-clipboard"></i>
								<a href="newsfeed.html" title="">News feed</a>
							</li>
							<li>
								<i class="ti-mouse-alt"></i>
								<a href="inbox.html" title="">Inbox</a>
							</li>
							<li>
								<i class="ti-files"></i>
								<a href="fav-page.html" title="">My pages</a>
							</li>
							<li>
								<i class="ti-user"></i>
								<a href="timeline-friends.html" title="">friends</a>
							</li>
							<li>
								<i class="ti-image"></i>
								<a href="timeline-photos.html" title="">images</a>
							</li>
							<li>
								<i class="ti-video-camera"></i>
								<a href="timeline-videos.html" title="">videos</a>
							</li>
							<li>
								<i class="ti-comments-smiley"></i>
								<a href="messages.html" title="">Messages</a>
							</li>
							<li>
								<i class="ti-bell"></i>
								<a href="notifications.html" title="">Notifications</a>
							</li>
							<li>
								<i class="ti-share"></i>
								<a href="people-nearby.html" title="">People Nearby</a>
							</li>
							<li>
								<i class="fa fa-bar-chart-o"></i>
								<a href="insights.html" title="">insights</a>
							</li>
							<li>
								<i class="ti-power-off"></i>
								<a href="landing.html" title="">Logout</a>
							</li>
						</ul>
					</div><!-- Shortcuts -->
					<div class="widget">
						<h4 class="widget-title">Profile intro</h4>
						<ul class="short-profile">
							<li>
								<span>about</span>
								<p>Hi, i am jhon kates, i am 32 years old and worked as a web developer in microsoft company. </p>
							</li>
							<li>
								<span>fav tv show</span>
								<p>Sacred Games, Spartcus Blood, Games of theron</p>
							</li>
							<li>
								<span>favourit music</span>
								<p>Justin Biber, Nati Natsha, Shakira</p>
							</li>
						</ul>
					</div><!-- profile intro widget -->

				</aside>
			</div>

			<div class="col-lg-9">
				<div class="central-meta">
					<div class="title-block">
						<div class="row">
							<div class="col-lg-6">
								<div class="align-left">
									<h5>Photos <span>62</span></h5>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="row merged20">
									<div class="col-lg-7 col-md-7 col-sm-7">
										<form method="post">
											<input type="text" placeholder="Search Photo">
											<button type="submit"><i class="fa fa-search"></i></button>
										</form>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-4">
										<div class="select-options">
											<select class="select">
												<option>Sort by</option>
												<option>A to Z</option>
												<option>See All</option>
												<option>Newest</option>
												<option>oldest</option>
											</select>
										</div>
									</div>
									<div class="col-lg-1 col-md-1 col-sm-1">
										<div class="option-list">
											<i class="fa fa-ellipsis-v"></i>
											<ul>
												<li class="active"><i class="fa fa-check"></i><a title="" href="#">Show Public</a></li>
												<li><a title="" href="#">Show only Friends</a></li>
												<li><a title="" href="#">Hide all Posts</a></li>
												<li><a title="" href="#">Mute Notifications</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><!-- title block -->
				<div class="central-meta">
					<div class="row merged5">
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<div class="item-upload album">
									<i class="fa fa-plus-circle"></i>
									<div class="upload-meta">
										<h5>Upload photo or album</h5>
										<span>its only take a few seconds!</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-101.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo1.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 15</a>
									<span>20 hours ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-22.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo2.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 20</a>
									<span>20 days ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-33.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo3.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 155</a>
									<span>Yesterday</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-44.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo4.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 201</a>
									<span>3 weeks ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-55.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo5.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 81</a>
									<span>2 months ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-66.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo6.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 98</a>
									<span>1 day</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-77.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo7.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 87</a>
									<span>23 hours ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-88.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo8.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 60</a>
									<span>3 days ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-99.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo9.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 897</a>
									<span>1 year ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-1001.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo10.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 983</a>
									<span>2 years ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-1011.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo11.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 40</a>
									<span>4 days ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-1012.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo12.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 15</a>
									<span>20 hours ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-1013.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo13.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 59</a>
									<span>20 days ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-1014.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo14.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 66</a>
									<span>1 year ago</span>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
							<div class="item-box">
								<a class="strip" href="/static/images/resources/photo-1015.jpg" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
									<img src="/static/images/resources/photo15.jpg" alt=""></a>
								<div class="over-photo">
									<a href="#" title=""><i class="fa fa-heart"></i> 98</a>
									<span>9 months ago</span>
								</div>
							</div>
						</div>
					</div>

					<div class="lodmore">
						<span>Viewing 1-15 of 62 Pictures</span>
						<button class="btn-view btn-load-more"></button>
					</div>
				</div><!-- photos -->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: "Photos",
})
</script>