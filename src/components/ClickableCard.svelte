<script setup lang="ts">
	export let title: string;
	export let onClick: () => void;
</script>

<button class="clickableCard" on:click={onClick}>
	<div class="boxTitle">{title}</div>
	<slot />
</button>

<style>
	.clickableCard {
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		border: none;
		padding: var(--panel-padding);
		height: 100%;
		color: var(--base-color);
		font-family: var(--font-family-standard);
		font-weight: 300;
		cursor: pointer;
		transition: max-height 0.5s ease-out;
		transition: background-color 0.5s;
	}

	.clickableCard:hover {
		background-color: color-mix(in srgb, var(--panel-background-color) 90%, black);
	}

	.boxTitle {
		margin-top: 0px;
		font-family: var(--font-family-fancy);
		font-size: 1.5em;
		margin-bottom: 10px;
	}
</style>
