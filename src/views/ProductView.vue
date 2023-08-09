<template>
	<div
		v-if="!isProductLoaded"
		class="product-view__loader"
	>
		<loader-overlay/>
	</div>

	<div v-else>
		<product-main-info
			class="product-view__main-info"
			:product="product"
		/>

		<div>
			<product-specifications :specifications="product.specifications"/>

			<product-description :description="product.description"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router/composables"

import ProductMainInfo from "@/components/ProductView/ProductMainInfo.vue"
import ProductDescription from "@/components/ProductView/ProductDescription.vue"
import ProductSpecifications from "@/components/ProductView/ProductSpecifications.vue"
import LoaderOverlay from "@/components/LoaderOverlay.vue"
import Product from "@/interfaces/product/Product"
import ProductApiServiceAsSingleton from "@/infrastructure/product/ProductApiServiceAsSingleton";

const route = useRoute()

const product = ref<Product | null>(null)
const isProductLoaded = ref<boolean>(false)

onMounted(async () => {
	try {
		product.value = await ProductApiServiceAsSingleton.get(route.params.slug)
	} finally {
		isProductLoaded.value = true
	}
})
</script>

<style lang="scss" scoped>
.product-view {
	&__loader {
		position: fixed;
		left: 0;
		right: 0;
		top: 50vh;
	}

	&__main-info {
		margin-bottom: 50px;
	}

	&__description {
		display: flex;
	}
}
</style>
