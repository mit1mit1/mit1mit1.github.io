<script lang="ts">
	import { page } from '$app/stores';
	import BoxOfStars from '../components/BoxOfStars.svelte';
	import NavSidebar from '../components/NavSidebar.svelte';
	import AboutMe from '../views/AboutMe.svelte';
	import Contact from '../views/Contact.svelte';
	import Projects from '../views/Projects.svelte';
	import MyTools from '../views/MyTools.svelte';
	import SupportUs from '../views/SupportUs.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { SvelteComponent } from 'svelte';
	import { goto } from '$app/navigation';
	import type { Tab } from '../types';

	const tabs: Tab[] = [
		{ iconClass: 'fa-solid fa-home', component: AboutMe },
		{ iconClass: 'fa-brands fa-github', name: 'projects', component: Projects },
		{ iconClass: 'fa-solid fa-screwdriver-wrench', name: 'tools I use', component: MyTools },
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
<div class="scrollbarPadding">
	<div class="appContainer" data-sveltekit-preload-data="hover">
		<NavSidebar {tabs} onSelectTab={(tab) => selectTab(tab)} {selectedTab} />
		<div style="display: contents">
			<div class="pageContainer">
				<svelte:component this={selectedTab.component} />
			</div>
		</div>
	</div>
</div>

<style>
	.scrollbarPadding {
		padding-left: calc(100vw - 100%);
	}

	.appContainer {
		padding-inline: 10px;
		padding-block: 20px;
		margin-left: auto;
		margin-right: auto;
		max-width: 1000px;
	}

	.pageContainer {
		margin-left: 18px;
		margin-right: 18px;
		font-family: var(--font-family-standard);
		font-weight: 300;
	}
	@media (max-width: 319px) {
		.pageContainer {
			overflow-wrap: anywhere;
		}
	}
</style>
