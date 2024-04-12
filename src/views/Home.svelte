<script setup lang="ts">
	import ClickableCard from '../components/ClickableCard.svelte';
	import InfoGrid from '../components/InfoGrid.svelte';
	import type { Tab } from '../types';

	export let tabs: Tab[];
	export let selectedTab: Tab;
	export let onSelectTab: (tab: Tab) => void;
</script>

<div class="buttonGrid">
	{#each tabs as tab}
		{#if !(tab.key === selectedTab.key)}
			<ClickableCard title={tab.title} onClick={() => onSelectTab(tab)}>
				{#if tab.description}
					{tab.description}
				{/if}
			</ClickableCard>
		{/if}
	{/each}
</div>

<style>
	.buttonGrid {
		display: grid;
		gap: 20px;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}

	@media (max-width: 767px) {
		.buttonGrid {
			flex-wrap: wrap;
		}
	}
</style>
