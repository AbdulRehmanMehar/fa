<template>
	<div>
		<div class="forum-warper">
			<div class="central-meta">
				<div class="title-block">
					<div class="row">
						<div class="col-lg-6">
							<div class="align-left">
								<h5>Create Forum Topic</h5>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="row">
								<div class="col-lg-7 col-md-6">
									<form method="post">
										<input type="text" placeholder="Search...">
										<button type="submit"><i class="fa fa-search"></i></button>
									</form>
								</div>
								<div class="col-lg-4 col-md-4">
									<div class="select-options">
										<select class="select">
											<option>Sort by</option>
											<option>See All</option>
											<option>Newest</option>
											<option>oldest</option>
											<option>A to Z</option>
										</select>
									</div>
								</div>
								<div class="col-lg-1 col-md-2">
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
		</div>
		<div class="forum-form">
			<div class="central-meta">
				<form method="post" class="c-form">
					<div>
						<label>Category</label>
						<input type="text" placeholder="Category">
					</div>
					<div>
						<label>Sub Category</label>
						<input type="text" placeholder="Sub Category">
					</div>
					<div>
						<label>Additional Info</label>
						<textarea rows="3" placeholder="write someting"></textarea>
					</div>
					<div>
						<label>Choose Optional Tags</label>
						<input type="text" placeholder="Jack Carter, william, ">
					</div>
					<div>
						<button class="main-btn" type="submit" data-ripple="">Post Topic</button>
						<button class="main-btn3" type="submit" data-ripple="">Cancel</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

// Requires Authentication...

export default Vue.extend({
	name: "CreateTopic",
})
</script>