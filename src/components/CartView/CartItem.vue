<template>
	<div>
		<router-link
			class="link_normalize cart-item__link"
			:to="productRoute"
		>
			<div class="cart-item__container">
				<div class="d-flex">
					<div class="cart-item__image">
						<img
							:alt="cartItem.product.name"
							:src="require(`../../assets/${cartItem.product.image}`)"
						/>
					</div>

					<span class="cart-item__name">
            {{ cartItem.product.name }}
          </span>
				</div>

				<product-info
					class="cart-item__info"
					:price="cartItem.price"
					:qty="cartItem.qty"
				/>

			</div>
		</router-link>
	</div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue"

import CartItem from "@/application/cart/types/CartItem"
import ProductInfo from "@/components/Shared/ProductInfo.vue"

interface Props {
	cartItem: CartItem
}

const props = defineProps<Props>()

const productRoute = computed(() => {
	return {
		name: "product",
		params: {
			slug: props.cartItem.product.slug
		}
	}
})
</script>

<style lang="scss" scoped>
.cart-item {
	&__container {
		display: flex;
		justify-content: space-between;
		border: 1px solid gray;
		border-radius: 6px;
		padding: 20px;

		@media (max-width: map-get($grid-breakpoints, sm)) {
			flex-direction: column;
			padding: 10px;
		}
	}

	&__link {
		color: inherit;
	}

	&__image {
		display: flex;
		justify-content: flex-start;
		height: 150px;

		@media (max-width: map-get($grid-breakpoints, sm)) {
			height: 100px;
		}
	}

	&__name {
		font-weight: bold;
	}

	&__info {
		@media (max-width: map-get($grid-breakpoints, sm)) {
			justify-content: flex-end;
			margin-top: 10px;
		}
	}
}
</style>
