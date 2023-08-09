<template>
	<div class="product-main-info__container">
		<div class="product-main-info__image-container">
			<img
				class="product-main-info__image"
				:alt="product.name"
				:src="require(`../../assets/${product.image}`)"
			/>
		</div>

		<div class="product-main-info__block">
			<h1 class="product-main-info__title">
				{{ product.name }}
			</h1>

			<product-info
				:price="product.price"
				:qty="product.qty"
			/>

			<v-btn
				class="product-main-info__button"
				color="primary"
				block
				:loading="isAddingToCart"
				@click="addToCart(product.sku, product.qty)"
			>
				Buy all
			</v-btn>
		</div>
	</div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue"

import {useCartStore} from "@/application/cart"
import Product from "@/interfaces/product/Product"
import ProductInfo from "@/components/Shared/ProductInfo.vue"

const cart = useCartStore()
const isAddingToCart = ref<boolean>(false)

interface Props {
	product: Product
}

defineProps<Props>()

async function addToCart(sku: Product["sku"], qty: Product["qty"]) {
	try {
		isAddingToCart.value = true
		await cart.addToCart(sku, qty)
	} finally {
		isAddingToCart.value = false
	}
}
</script>

<style lang="scss" scoped>
.product-main-info {
	&__container {
		display: flex;
		justify-content: space-between;

		@media (max-width: map-get($grid-breakpoints, md)) {
			flex-direction: column;
		}
	}

	&__block {
		max-width: 500px;

		@media (max-width: map-get($grid-breakpoints, md)) {
			max-width: 100%;
			margin-top: 50px;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	&__image-container {
		@media (max-width: map-get($grid-breakpoints, md)) {
			height: 300px;
			margin: auto;
		}

		@media (max-width: map-get($grid-breakpoints, sm)) {
			height: 200px;
		}
	}

	&__title {
		font-size: 24px;
		line-height: 34px;
		font-weight: bold;
		margin-bottom: 50px;

		@media (max-width: map-get($grid-breakpoints, md)) {
			margin-bottom: 20px;
		}
	}

	&__value {
		font-size: 20px;
		line-height: 24px;
		font-weight: bold;
	}

	&__button {
		margin-top: 10px;
	}
}
</style>