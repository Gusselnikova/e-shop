<template>
	<v-app>
		<app-header/>

		<v-main>
			<div class="app__container">
				<router-view/>
			</div>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "./components/AppHeader.vue"

export default Vue.extend({
	name: "App",
	components: {
		AppHeader
	},
});
</script>

<style lang="scss" scoped>
.app {
	&__container {
		position: relative;
		max-width: $container-max-width;
		margin: auto;
		padding: 100px 30px;

		@media (max-width: map-get($grid-breakpoints, md)) {
			padding: 50px 10px;
		}
	}
}
</style>
