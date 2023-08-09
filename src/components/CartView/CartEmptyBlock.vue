<template>
	<div class="cart-empty-block">
		<v-icon
			class="cart-empty-block__icon"
			color="primary"
			size="190"
		>
			{{ mdiCartOutline }}
		</v-icon>

		<h1> Your cart is empty </h1>
	</div>
</template>

<script setup lang="ts">
import {mdiCartOutline} from '@mdi/js'
</script>

<style lang="scss" scoped>
.cart-empty-block {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: calc(100vh - 350px);

	&__icon {
		margin-bottom: 50px;
	}
}
</style>