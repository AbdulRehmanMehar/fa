<template>
	<div class="www-layout">
		<section>
			<div class="gap no-gap signin whitish medium-opacity">
				<div class="bg-image" style="background-color: #f3f3f3"></div>
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="big-ad">
								<figure><img src="/static/images/logo2.png" alt=""></figure>
								<h1>Welcome to the {{ $root.applicationName }}</h1>
								<p>
									Pitnik is a social network template that can be used to connect people. use this template for multipurpose social activities like job, dating, posting, bloging and much more. Now join & Make Cool Friends around the world !!!
								</p>

								<div class="fun-fact">
									<div class="row">
										<div class="col-lg-3 col-md-3 col-sm-4">
											<div class="fun-box">
												<i class="ti-check-box"></i>
												<h6>Registered People</h6>
												<span>1,01,242</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-3 col-sm-4">
											<div class="fun-box">
												<i class="ti-layout-media-overlay-alt-2"></i>
												<h6>Posts Published</h6>
												<span>21,03,245</span>
											</div>
										</div>
										<div class="col-lg-3 col-md-3 col-sm-4">
											<div class="fun-box">
												<i class="ti-user"></i>
												<h6>Online Users</h6>
												<span>40,145</span>
											</div>
										</div>
									</div>
								</div>
								<div class="barcode">
									<figure><img src="/static/images/resources/Barcode.jpg" alt=""></figure>
									<div class="app-download">
										<span>Download Mobile App and Scan QR Code to login</span>
										<ul class="colla-apps">
											<li><a title="" href="https://play.google.com/store?hl=en"><img src="/static/images/android.png" alt="">android</a></li>
											<li><a title="" href="https://www.apple.com/lae/ios/app-store/"><img src="/static/images/apple.png" alt="">iPhone</a></li>
											<li><a title="" href="https://www.microsoft.com/store/apps"><img src="/static/images/windows.png" alt="">Windows</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<router-view></router-view>
						</div>

					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: 'UserAuthentication',

	mounted() {
		console.log('mounted usr')
	}
})
</script>

