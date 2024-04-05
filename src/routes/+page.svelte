<script lang="ts">
	import { page } from '$app/stores';
	import BoxOfStars from '../components/BoxOfStars.svelte';
	import AboutMe from '../components/AboutMe.svelte';
	import Contact from '../components/Contact.svelte';
	import Projects from '../components/Projects.svelte';
	import SupportUs from '../components/SupportUs.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { SvelteComponent } from 'svelte';
	import { goto } from '$app/navigation';

	interface Tab {
		name?: string;
		component: typeof SvelteComponent;
		iconClass: string;
	}
	const tabs: Tab[] = [
		{ iconClass: 'fa-solid fa-home', component: AboutMe },
		{ iconClass: 'fa-solid fa-screwdriver-wrench', name: 'projects', component: Projects },
		{ iconClass: 'fa-solid fa-envelope', name: 'contact', component: Contact },
		{ iconClass: 'fa-solid fa-handshake', name: 'support', component: SupportUs }
	];
	let selectedTab = tabs[0];
	const queryParamsTabName = $page.url.searchParams.get('tab');

	tabs.forEach((tab) => {
		if (tab.name === queryParamsTabName) {
			selectedTab = tab;
		}
	});

	const selectTab = (tab: Tab) => {
		selectedTab = tab;
		if (tab.name) {
			$page.url.searchParams.set('tab', tab.name);
		} else {
			$page.url.searchParams.delete('tab');
		}
		goto(`?${$page.url.searchParams.toString()}`);
	};
</script>

<BoxOfStars />
<div class="appContainer" data-sveltekit-preload-data="hover">
	<div class="navContainer">
		{#each tabs as tab}
			<button
				on:click={() => selectTab(tab)}
				aria-label={tab.name ?? 'home'}
				class={tab.name === selectedTab.name ? 'selectedTab' : ''}
			>
				{#if tab.iconClass}
					<i class={`${tab.iconClass} buttonIcon`} />
				{/if}
			</button>
		{/each}
	</div>
	<div style="display: contents">
		<div class="pageContainer">
			<svelte:component this={selectedTab.component} />
		</div>
	</div>
</div>

<style>
	.appContainer {
		padding-inline: 10px;
		padding-block: 20px;
	}
	@media (min-width: 800px) {
		.appContainer {
			margin-right: 25px;
		}
	}

	.buttonIcon {
		min-width: 30px;
	}

	.navContainer {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-bottom: 10px;
		display: flex;
		justify-content: space-evenly;
	}
	@media (min-width: 800px) {
		.navContainer {
			position: fixed;
			right: 10px;
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
		font-family: 'Quicksand', sans-serif;
		cursor: pointer;
		color: black;
		min-height: 50px;
		overflow: hidden;
		transition: max-height 0.5s ease-out;
		opacity: 80%;
		display: inline-block;
		transition: background-color 0.5s;
		border-radius: 3px;
	}

	.navContainer button.selectedTab {
		display: inline-block;
	}

	.navContainer button:hover {
		background-color: #c4c3c3;
	}

	.navContainer .selectedTab {
		background-color: #a5a5a5;
	}

	.pageContainer {
		margin-left: 18px;
		margin-right: 18px;
		font-family: Quicksand;
	}
	@media (max-width: 270px) {
		.pageContainer {
			overflow-wrap: anywhere;
		}
	}
</style>
