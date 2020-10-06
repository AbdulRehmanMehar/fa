<template>
	<div>
		<div class="theme-layout">
			<div class="postoverlay"></div>
			<Navbar />

			<!--	For MENU	-->
			<SidebarLeft />

			<!--	For Messages	-->
			<SidebarRight />

			<section>
				<div class="gap2 gray-bg">
					<router-view></router-view>
				</div>
			</section>

		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/authenticated/Navbar";
import SidebarLeft from "@/components/authenticated/SidebarLeft";
import SidebarRight from "@/components/authenticated/SidebarRight";


export default Vue.extend({
	name: "Authenticated",

	components: { Navbar, SidebarLeft, SidebarRight }
})
</script>

<style scoped>

</style>