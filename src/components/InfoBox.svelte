<script setup lang="ts">
	export let title: string;
</script>

<div class="infoBox">
	<h2 class="boxTitle">{title}</h2>
	<slot />
</div>

<style>
	.infoBox {
		min-width: 250px;
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		padding: var(--panel-padding);
		height: fit-content;
		margin-bottom: 20px;
	}

	.boxTitle {
		margin-top: 0px;
	}
</style>
