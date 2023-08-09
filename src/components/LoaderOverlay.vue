<template>
	<div class="loader-overlay">
		<v-progress-circular
			indeterminate
			size="64"
		/>
	</div>
</template>

<style lang="scss" scoped>
.loader-overlay {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>