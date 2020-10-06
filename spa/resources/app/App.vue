<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'App',

	mounted() {
		console.log('mounted app')
	}
})
</script>