<template>
	<v-btn
		class="home__btn"
		color="primary"
		@click="goToPDP"
	>
		go shopping
	</v-btn>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router/composables"

const router = useRouter()

const INITIAL_PRODUCT_SLUG = "apple-iphone-11-pro-max-256gb-space-gray"

function goToPDP() {
	router.push({
		name: "product",
		params: {
			slug: INITIAL_PRODUCT_SLUG
		}
	})
}
</script>