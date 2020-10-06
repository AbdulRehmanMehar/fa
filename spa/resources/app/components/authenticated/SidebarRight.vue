<template>
	<div>
		<div class="fixed-sidebar right">
			<div class="chat-friendz">
				<ul class="chat-users ps-container ps-theme-default" data-ps-id="55eef8e2-11a4-e2f6-03ab-1741c8f47699">
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend1.jpg" alt="">
							<span class="status f-online"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend2.jpg" alt="">
							<span class="status f-away"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend3.jpg" alt="">
							<span class="status f-online"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend4.jpg" alt="">
							<span class="status f-offline"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend5.jpg" alt="">
							<span class="status f-online"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend6.jpg" alt="">
							<span class="status f-online"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend7.jpg" alt="">
							<span class="status f-offline"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend8.jpg" alt="">
							<span class="status f-online"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend9.jpg" alt="">
							<span class="status f-away"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend10.jpg" alt="">
							<span class="status f-away"></span>
						</div>
					</li>
					<li>
						<div class="author-thmb">
							<img src="/static/images/resources/side-friend8.jpg" alt="">
							<span class="status f-online"></span>
						</div>
					</li>
					<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></ul>
				<div class="chat-box">
					<div class="chat-head">
						<span class="status f-online"></span>
						<h6>Bucky Barnes</h6>
						<div class="more">
							<div class="more-optns"><i class="ti-more-alt"></i>
								<ul>
									<li>block chat</li>
									<li>unblock chat</li>
									<li>conversation</li>
								</ul>
							</div>
							<span class="close-mesage"><i class="ti-close"></i></span>
						</div>
					</div>
					<div class="chat-list">
						<ul class="ps-container ps-theme-default ps-active-y" data-ps-id="5b4d6dc9-6591-ce64-535a-0231f5101696">
							<li class="me">
								<div class="chat-thumb"><img src="/static/images/resources/chatlist1.jpg" alt=""></div>
								<div class="notification-event">
								<span class="chat-message-item">
									HI, Jack i have faced a problem with your software. are you available now, when i install this i have to received an error.
								</span>
									<span class="notification-date"><time datetime="2004-07-24T18:18" class="entry-date updated">Today at 2:12pm</time></span>
								</div>
							</li>
							<li class="you">
								<div class="chat-thumb"><img src="/static/images/resources/chatlist2.jpg" alt=""></div>
								<div class="notification-event">
								<span class="chat-message-item">
									Hi tina, Please let me know your purchase code, and show me the screnshot of error.
								</span>
									<span class="notification-date"><time datetime="2004-07-24T18:18" class="entry-date updated">Today at 2:14pm</time></span>
								</div>
							</li>
							<li class="me">
								<div class="chat-thumb"><img src="/static/images/resources/chatlist1.jpg" alt=""></div>
								<div class="notification-event">
								<span class="chat-message-item">
									Yes, sure please wait a while, i ll show you the complete error list. Thank you.
								</span>
									<span class="notification-date"><time datetime="2004-07-24T18:18" class="entry-date updated">Today at 2:15pm</time></span>
								</div>
							</li>
							<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; height: 290px; right: 0px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 215px;"></div></div></ul>
						<form class="text-box">
							<textarea placeholder="Post enter to post..."></textarea>
							<div class="add-smiles">
								<span title="add icon" class="em em-expressionless"></span>
								<div class="smiles-bunch">
									<i class="em em---1"></i>
									<i class="em em-smiley"></i>
									<i class="em em-anguished"></i>
									<i class="em em-laughing"></i>
									<i class="em em-angry"></i>
									<i class="em em-astonished"></i>
									<i class="em em-blush"></i>
									<i class="em em-disappointed"></i>
									<i class="em em-worried"></i>
									<i class="em em-kissing_heart"></i>
									<i class="em em-rage"></i>
									<i class="em em-stuck_out_tongue"></i>
								</div>
							</div>

							<button type="submit"></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: "SidebarRight"
})
</script>

<style scoped>
[class^="ti-"], [class*=" ti-"] {
	display: block !important;
	margin-top: 1px !important;
}
</style>