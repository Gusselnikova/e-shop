<template>
	<div class="product-info__container">
		<div class="product-info__block">
			<span class="text-overline">Quantity:</span>

			<span class="product-info__value">{{ props.qty }}</span>
		</div>

		<div class="product-info__block">
			<span class="text-overline">Price:</span>

			<span class="product-info__value">${{ props.price }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
	qty: number
	price: number
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.product-info {
	&__container {
		display: flex;
		margin-bottom: 20px;
	}

	&__block {
		display: flex;
		flex-direction: column;

		&:not(:last-child) {
			margin-right: 20px;
		}
	}

	&__value {
		font-weight: bold;
	}
}
</style>