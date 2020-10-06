<template>
	<div>
		<div class="forum-warper">
			<div class="central-meta">
				<div class="title-block">
					<div class="row">
						<div class="col-lg-6">
							<div class="align-left">
								<h5>Forum Posts</h5>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="row merged20">
								<div class="col-lg-7 col-md-7 col-sm-7">
									<form method="post">
										<input type="text" placeholder="Search...">
										<button type="submit"><i class="fa fa-search"></i></button>
									</form>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
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
			<h4>A new way to find help </h4>
			<router-link class="addnewforum" :to="{ name: 'forum-create-topic' }" title=""><i class="fa fa-plus"></i> Add New</router-link>
		</div>
		<div class="central-meta">
			<div class="forum-list">
				<table class="table table-responsive">
					<thead>
					<tr>
						<th scope="col">forum</th>
						<th scope="col">topics</th>
						<th scope="col">posts</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Asset for creating a beautiful website</a>
							<p>list your recommended website and when you start to create your website so please check your laptop window and battery :-)</p>
						</td>
						<td>4</td>
						<td>5</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Modifications &amp; Useful Snippets</a>
							<p>Share your own custom snippets for modifying the winku template beyond it's limits.</p>
						</td>
						<td>10</td>
						<td>3</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Pricing &amp; Redunds</a>
							<p>Questions regarding pricing and refunds should be posted here.</p>
						</td>
						<td>40</td>
						<td>23</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">SEO Optimization</a>
							<p>Post your SEO optimizations and tips via this thread.</p>
						</td>
						<td>2</td>
						<td>8</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Server Related Errors and Fixes</a>
							<p>Having issues with your server and your hosting company won't help you? Post a comment on the forum for help.</p>
						</td>
						<td>14</td>
						<td>60</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Why should you purchase the winku Template?</a>
							<p>Winku have a great features and created with the logic for making easy to create social website.</p>
						</td>
						<td>15</td>
						<td>29</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Beginner Guides &amp; Tips</a>
							<p>Useful tips, guides and tricks for beginners.</p>
						</td>
						<td>30</td>
						<td>10</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Pricing &amp; Redunds</a>
							<p>Questions regarding pricing and refunds should be posted here.</p>
						</td>
						<td>40</td>
						<td>23</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">SEO Optimization</a>
							<p>Post your SEO optimizations and tips via this thread.</p>
						</td>
						<td>2</td>
						<td>8</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Asset for creating a beautiful website</a>
							<p>list your recommended website and when you start to create your website so please check your laptop window and battery :-)</p>
						</td>
						<td>4</td>
						<td>5</td>
					</tr>
					<tr>
						<td>
							<i class="fa fa-comments"></i>
							<a href="forums-category.html" title="">Modifications &amp; Useful Snippets</a>
							<p>Share your own custom snippets for modifying the winku template beyond it's limits.</p>
						</td>
						<td>10</td>
						<td>3</td>
					</tr>
					</tbody>
				</table>
				<div class="lodmore">
					<button class="btn-view btn-load-more"></button>
				</div>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: "Main",
})
</script>