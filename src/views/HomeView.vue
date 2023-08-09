<template>
	<div class="home__container">
		<div class="home__image-container">
			<v-img
				:src="require('../assets/welcome.jpg')"
				contain
			/>
		</div>

		<div class="home__actions">
			<h1 class="mb-4">Welcome to E-SHOP</h1>

			Click button to continue shopping
			<v-btn
				class="home__btn"
				color="primary"
				@click="goToPDP"
			>
				go shopping
			</v-btn>
		</div>
	</div>
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

<style lang="scss" scoped>
.home {
	&__container {
		display: flex;
		align-items: center;
		justify-content: space-around;
		max-height: calc(100vh - 400px);

		@media (max-width: map-get($grid-breakpoints, md)) {
			flex-direction: column;
		}
	}

	&__image-container {
		width: 50%;

		@media (max-width: map-get($grid-breakpoints, md)) {
			width: 100%;
		}
	}

	&__actions {
		display: flex;
		flex-direction: column;
	}

	&__btn {
		margin-top: 20px;
	}
}
</style>
