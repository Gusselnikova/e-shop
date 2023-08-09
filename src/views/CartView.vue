<template>
	<div>
		<loader-overlay v-if="!cart.isLoaded || isOrderProcessing"/>

		<cart-empty-block v-if="cart.isEmpty"/>

		<div v-else>
			<cart-items
				class="cart__items"
				:cart-items="cart.items"
			/>

			<cart-summary @click-place-order="createOrder"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {useRouter} from "vue-router/composables";

import {useCartStore} from "@/application/cart"
import LoaderOverlay from "@/components/LoaderOverlay.vue"
import CartItems from "@/components/CartView/CartItems.vue";
import CartSummary from "@/components/CartView/CartSummary.vue";
import CartEmptyBlock from "@/components/CartView/CartEmptyBlock.vue";
import OrderApiServiceAsSingleton from "@/infrastructure/order/OrderApiServiceAsSingleton";

const cart = useCartStore()
const router = useRouter()

const isOrderProcessing = ref<boolean>(false)

async function createOrder() {
	try {
		isOrderProcessing.value = true
		const orderId = await OrderApiServiceAsSingleton.create()
		await cart.clear()

		router.push({
			name: 'order-created',
			params: {
				id: orderId
			}
		})
	} finally {
		isOrderProcessing.value = false
	}
}
</script>

<style lang="scss" scoped>
.cart {
	&__items {
		margin-bottom: 100px;
	}
}
</style>