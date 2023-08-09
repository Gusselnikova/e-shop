<template>
	<div>
		<div class="cart-summary__spacer" />

		<div class="cart-summary__container">
			<div class="cart-summary__content">
				<div class="cart-summary__total">
					<span class="text-overline">Order total:</span>

					<span class="cart-summary__price">${{ totalPrice }}</span>
				</div>

				<v-btn
					color="primary"
					block
					@click="$emit('click-place-order')"
				>
					Place order
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useCartStore} from "@/application/cart";

const cart = useCartStore()

const totalPrice = computed((): number => cart.items.reduce((accum, value) => accum + value.price, 0))
</script>

<style lang="scss" scoped>
.cart-summary {
	&__spacer {
		height: 98px;
	}

	&__total {
		margin-bottom: 10px;
	}
	&__price {
		font-weight: bold;
		margin-left: 10px;
	}

	&__container {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
		padding: 10px;
		box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
	}

	&__content {
		max-width: $container-max-width;
		margin: auto;
	}
}
</style>