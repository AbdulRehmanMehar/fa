<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<div class="sidebar static left">
					<Community />
				</div>

			</div>

			<div class="col-lg-9">

				<div class="central-meta">
					<div class="title-block">
						<div class="row">
							<div class="col-lg-6">
								<div class="align-left">
									<h5>Ocean Motel Events</h5>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="row">
									<div class="col-lg-7 col-md-7 col-sm-7">
										<form method="post">
											<input type="text" placeholder="Search..">
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
												<li><a title="" href="#">Show Friends Public</a></li>
												<li><a title="" href="#">Show Friends Private</a></li>
												<li><a title="" href="#">Mute Notifications</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="central-meta">
					<div class="row">
						<div class="col-lg-12">
							<EventBox />
						</div>

						<div class="col-lg-12">
							<EventBox />
						</div>

						<div class="col-lg-12">
							<EventBox />
						</div>
					</div>
				</div>

				<LoadMore />

			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Community from "@/components/page/Community.vue";
import EventBox from "@/components/general/EventBox.vue";
import LoadMore from "@/components/LoadMore.vue";


export default Vue.extend({
	name: 'Events',
	components: { Community, EventBox, LoadMore }
})
</script>

