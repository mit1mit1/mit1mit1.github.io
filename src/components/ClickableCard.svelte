<script setup lang="ts">
	export let title: string;
	export let onClick: () => void;
	export let iconClass: string;
</script>

<button class="clickableCard" on:click={onClick}>
	<div class="iconContainer">
		{#if iconClass}
			<i class={`${iconClass} cardIcon`} />
		{/if}
	</div>
	<div>
		<div class="boxTitle">{title}</div>
		<slot />
	</div>
</button>

<style>
	.clickableCard {
		background-color: var(--button-background-color);
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
		text-align: left;
		display: flex;
		align-items: center;
		gap: 15px;
		box-shadow: 0 10px 0 -5px color-mix(in srgb, var(--button-background-color) 50%, var(--button-hover-background-color));
	}

	.clickableCard:hover {
		background-color: var(--button-hover-background-color);
	}

	.boxTitle {
		margin-top: 0px;
		font-family: var(--font-family-fancy);
		font-size: 1.5em;
		margin-bottom: 10px;
	}

	.cardIcon {
		min-height: 30px;
		min-width: 30px;
		font-size: 30px;
		vertical-align: middle;
		line-height: 30px;
		text-align: center;
	}

	.iconContainer {
		display: inline-block;
	}
</style>
