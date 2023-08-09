<template>
	<div>
		<cart-item
			v-for="cartItem in cartItems"
			:key="cartItem.sku"
			:cartItem="cartItem"
		/>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import CartItem from "@/components/CartView/CartItem.vue"
import CartItemType from "@/application/cart/types/CartItem"

interface Props {
	cartItems: CartItemType[]
}

const props = defineProps<Props>()
</script>