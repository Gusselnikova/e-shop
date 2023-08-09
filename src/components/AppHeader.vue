<template>
	<v-app-bar
		app
		color="gray"
		dark
	>
		<div class="app-header__container">
			<router-link
				class="link_normalize"
				:to="{ name: 'home'}"
			>
				<span>E-SHOP</span>
			</router-link>

			<cart-btn/>
		</div>
	</v-app-bar>
</template>

<script setup lang="ts">
import CartBtn from "@/components/CartBtn.vue"
</script>

<style lang="scss" scoped>
.app-header {
	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
}
</style>
