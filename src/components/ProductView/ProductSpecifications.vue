<template>
	<div class="product-specifications">
		<v-simple-table class="text-body-2">
			<template #default>
				<tbody>
				<tr
					v-for="(item, index) of specifications"
					:key="index"
				>
					<td class="product-specifications__cell product-specifications__label-cell">
						{{ item.label }}
					</td>

					<td class="product-specifications__cell text-subtitle-1">
						{{ item.value }}
					</td>
				</tr>
				</tbody>
			</template>
		</v-simple-table>
	</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

import Product from "@/interfaces/product/Product"

interface Props {
	specifications: Product["specifications"]
}

const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
.product-specifications {
	padding: 16px;

	&__cell {
		height: 40px !important;
		font-weight: bold;
	}

	&__label-cell {
		padding-left: 0;
		padding-right: 5px;
		width: 150px;
		font-weight: normal;
	}
}
</style>