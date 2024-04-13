<script setup lang="ts">
	import type { Tab } from '../types';

	export let tabs: Tab[] = [];
	export let selectedTab: Tab;
	export let onSelectTab: (tab: Tab) => void;
</script>

<div class="navContainer">
	{#each tabs as tab}
		<button
			on:click={() => onSelectTab(tab)}
			aria-label={tab.key ?? 'home'}
			class={tab.key === selectedTab.key ? 'selectedTab' : ''}
		>
			{#if tab.iconClass}
				<i class={`${tab.iconClass} buttonIcon`} />
			{/if}
		</button>
	{/each}
</div>

<style>
	.buttonIcon {
		min-width: 20px;
	}

	.navContainer {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-bottom: 10px;
		display: flex;
		justify-content: space-evenly;
	}
	@media (min-width: 768px) {
		.navContainer {
			position: fixed;
			right: calc(20px + 100% - 100vw);
			flex-direction: column;
		}
	}

	.navContainer button {
		margin-bottom: 5px;
		margin-right: 5px;
		transition-duration: 0.4s;
		border: none;
		padding: 8px 12px;
		width: 100%;
		font-size: 1.15em;
		font-family: var(--font-family-standard);
		font-weight: 300;
		cursor: pointer;
		color: var(--button-color);
		min-height: 50px;
		overflow: hidden;
		transition: max-height 0.5s ease-out;
		display: inline-block;
		transition: background-color 0.5s;
		border-radius: 3px;
		background-color: var(--button-background-color);
	}

	.navContainer button.selectedTab {
		display: inline-block;
	}

	.navContainer button:hover:not(.selectedTab) {
		background-color: var(--button-hover-background-color);
	}

	.navContainer .selectedTab {
		background-color: var(--button-selected-background-color);
	}
</style>
