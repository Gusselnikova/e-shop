<template>
	<div class="product-description pa-4 pa-md-5">
		<h3 class="text-overline mb-4">
			Description
		</h3>

		<div
			class="product-description__text text-body-2"
			:class="{'product-description__text_truncated': isDescriptionTruncated && description}"
			v-html="description"
		/>

		<v-btn
			v-if="description"
			text
			class="product-description__toggle-button px-1 font-weight-bold"
			@click="toggleDescription"
		>
			{{ isDescriptionTruncated ? 'Show more' : 'Show less' }}
			<v-icon
				class="product-description__toggle-button-icon"
				:class="{'product-description__toggle-button-icon_down': isDescriptionTruncated}"
			>
				{{ mdiChevronDown }}
			</v-icon>
		</v-btn>
	</div>
</template>

<script setup lang=ts>
import {mdiChevronDown} from '@mdi/js'
import {defineProps, ref} from 'vue'

interface Props {
	description: string
}

defineProps<Props>()

const isDescriptionTruncated = ref(true)

function toggleDescription(): void {
	isDescriptionTruncated.value = !isDescriptionTruncated.value
}
</script>

<style lang="scss" scoped>
.product-description {
	&__text {
		overflow: hidden;
		position: relative;

		&_truncated {
			height: 30px;

			&::after {
				content: "";
				width: 100%;
				height: 30px;
				position: absolute;
				bottom: 0;
				right: 0;
				background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 85%);
			}
		}
	}

	&__toggle-button {
		margin-left: -4px;
	}

	&__toggle-button-icon {
		transform: rotate(180deg);

		&_down {
			transform: rotate(0deg);
		}
	}
}
</style>