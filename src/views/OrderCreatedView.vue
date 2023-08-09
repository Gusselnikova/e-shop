<template>
	<div class="order-created__container">
		<v-icon
			class="order-created__icon"
			color="primary"
			size="190"
		>
			{{ mdiCheckCircleOutline }}
		</v-icon>

		<div class="order-created__title">
			Order #{{ orderId }} confirmed!
		</div>

		<div class="text-body-1">
			Thank you for your order. We will send you an email notification when your order is ready to be shipped.
		</div>

		<go-shop-btn class="order-created__btn"/>
	</div>
</template>

<script setup lang="ts">
import { mdiCheckCircleOutline } from '@mdi/js';
import {computed} from "vue";
import { useRoute } from "vue-router/composables"

import GoShopBtn from "@/components/Shared/GoShopBtn.vue"

const route = useRoute()

const orderId = computed((): string => route.params.id)
</script>

<style lang="scss" scoped>
.order-created {
	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 350px);
	}

	&__icon {
		margin-bottom: 50px;
	}

	&__title {
		margin-bottom: 20px;
		font-weight: bold;
	}

	&__btn {
		margin-top: 20px;
	}
}
</style>