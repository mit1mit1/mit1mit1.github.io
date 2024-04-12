<script setup lang="ts">
	export let title: string;
	export let onClick: () => void;
</script>

<button class="clickableCard" on:click={onClick}>
	<h2 class="boxTitle">{title}</h2>
	<slot />
</button>

<style>
	.clickableCard {
		min-width: 250px;
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		border: none;
		padding: var(--panel-padding);
		height: fit-content;
		color: var(--base-color);
		font-family: var(--font-family-standard);
		font-weight: 300;
		cursor: pointer;
		transition: max-height 0.5s ease-out;
		transition: background-color 0.5s;
	}

	.clickableCard:hover {
		background-color: color-mix(in srgb, var(--panel-background-color) 95%, white);
	}

	.boxTitle {
		margin-top: 0px;
	}

</style>
