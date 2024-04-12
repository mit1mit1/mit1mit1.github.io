<script lang="ts">
	import { page } from '$app/stores';
	import BoxOfStars from '../components/BoxOfStars.svelte';
	import NavSidebar from '../components/NavSidebar.svelte';
	import AboutMe from '../views/AboutMe.svelte';
	import Home from '../views/Home.svelte';
	import Contact from '../views/Contact.svelte';
	import Projects from '../views/Projects.svelte';
	import MyTools from '../views/MyTools.svelte';
	import CallingCard from '../components/CallingCard.svelte';
	import PageHeader from '../components/PageHeader.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { goto } from '$app/navigation';
	import type { Tab } from '../types';

	const tabs: Tab[] = [
		{ iconClass: 'fa-solid fa-home', component: Home, title: 'Home' },
		{
			iconClass: 'fa-solid fa-user',
			key: 'about me',
			component: AboutMe,
			title: 'About me',
			description: 'Find out about Mitch'
		},
		{
			iconClass: 'fa-brands fa-github',
			key: 'projects',
			component: Projects,
			title: 'Personal projects',
			description: "See what bizzare stuff I've been up to"
		},
		{
			iconClass: 'fa-solid fa-screwdriver-wrench',
			key: 'tools I use',
			component: MyTools,
			title: 'Tools I use',
			description: 'Read about how much I hate coffee script'
		},
		{
			iconClass: 'fa-solid fa-envelope',
			key: 'contact',
			component: Contact,
			title: 'Contact',
			description: 'Find out how to send me an angry email'
		}
	];
	let selectedTab = tabs[0];
	const queryParamsTabKey = $page.url.searchParams.get('tab');

	tabs.forEach((tab) => {
		if (tab.key === queryParamsTabKey) {
			selectedTab = tab;
		}
	});

	const selectTab = (tab: Tab) => {
		selectedTab = tab;
		if (tab.key) {
			$page.url.searchParams.set('tab', tab.key);
		} else {
			$page.url.searchParams.delete('tab');
		}
		goto(`?${$page.url.searchParams.toString()}`);
	};
</script>

<BoxOfStars />
<div class="scrollbarPadding">
	<div class="appContainer" data-sveltekit-preload-data="hover">
		<NavSidebar {tabs} onSelectTab={selectTab} {selectedTab} />
		<div style="display: contents">
			<div class="pageContainer">
				{#if selectedTab.key === 'about me' || selectedTab.key === undefined}
				<PageHeader heading="Design · Logically" />
				<CallingCard />
				{/if}
				<svelte:component
					this={selectedTab.component}
					{tabs}
					onSelectTab={selectTab}
					{selectedTab}
				/>
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
