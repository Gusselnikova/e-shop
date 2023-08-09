<template>
	<v-overlay
		:opacity="0.8"
		:z-index="400"
		v-bind="{...$props, ...$attrs}"
	>
		<v-progress-circular
			indeterminate
			size="64"
		/>
	</v-overlay>
</template>

<!--<style lang="scss" scoped>-->
<!--.loader-overlay {-->
<!--	height: 100%;-->
<!--	width: 100%;-->
<!--	display: flex;-->
<!--	justify-content: center;-->
<!--	align-items: center;-->
<!--}-->
<!--</style>-->