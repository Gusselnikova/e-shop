<template>
	<div>
		<cart-empty-block v-if="cart.isEmpty"/>

		<div v-else>
			<cart-items
				class="cart__items"
				:cart-items="cart.items"
			/>

			<cart-summary/>

		</div>
	</div>
</template>

<script setup lang="ts">
import {useCartStore} from "@/application/cart"

import CartItems from "@/components/CartView/CartItems.vue";
import CartSummary from "@/components/CartView/CartSummary.vue";
import CartEmptyBlock from "@/components/CartView/CartEmptyBlock.vue";

const cart = useCartStore()
</script>

<style lang="scss" scoped>
.cart {
	&__items {
		margin-bottom: 100px;
	}
}
</style>