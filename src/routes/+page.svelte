<script lang="ts">
	import { page } from '$app/stores';
	import { stars } from '../constants/stars';
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

<div class="pageHolder">
	<enhanced:img class="mitchClouds" src="/static/images/smileGlowBaW.png" alt="A nutjob" />
	<enhanced:img
		class="mitchClouds secondCloud"
		src="/static/images/smileGlowBaW.png"
		alt="A nutjob"
	/>
	<enhanced:img
		class="mitchClouds thirdCloud"
		src="/static/images/smileGlowBaW.png"
		alt="A nutjob"
	/>
	<enhanced:img
		class="mitchClouds fourthCloud"
		src="/static/images/smileGlowBaW.png"
		alt="A nutjob"
	/>
	<svg id="boxOfStars" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
		{#each [...stars] as star}
			<circle cx={star.x} cy={star.y} r={star.radius} class={star.class} fill={star.fill} />
		{/each}
	</svg>
</div>
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

	.buttonIcon {
		min-width: 30px;
	}

	@media (min-width: 500px) {
		.phoneOnly {
			display: none;
		}
	}

	:global(h1) {
		font-family: 'Architects Daughter';
		display: block;
	}
	@media (min-width: 800px) {
		:global(h1) {
			margin-top: 0px;
		}
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
			position: absolute;
			right: 10px;
			flex-direction: column;
		}
	}

	.navContainer button {
		margin-bottom: 5px;
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

	.pageHolder {
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: -1;
		overflow: hidden;
	}

	#boxOfStars {
		position: fixed;
		display: block;
		position: inherit;
		width: 3840px;
		height: 2160px;
		z-index: -1;
		overflow: hidden;
	}

	.mitchClouds {
		position: fixed;
		display: block;
		width: 1920px;
		height: 1920px;
		z-index: -2;
		overflow: hidden;
	}
	.secondCloud {
		top: 1920px;
		left: 0px;
	}
	.thirdCloud {
		top: 0px;
		left: 1920px;
	}
	.fourthCloud {
		top: 1920px;
		left: 1920px;
	}

	@keyframes flickerAnimation {
		0% {
			opacity: 0.1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}
	@-o-keyframes flickerAnimation {
		0% {
			opacity: 0.1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}
	@-moz-keyframes flickerAnimation {
		0% {
			opacity: 0.1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}
	@-webkit-keyframes flickerAnimation {
		0% {
			opacity: 0.1;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}

	.animate-flicker-7 {
		-webkit-animation: flickerAnimation 7s infinite;
		-moz-animation: flickerAnimation 7s infinite;
		-o-animation: flickerAnimation 7s infinite;
		animation: flickerAnimation 7s infinite;
	}

	.animate-flicker-11 {
		-webkit-animation: flickerAnimation 11s infinite;
		-moz-animation: flickerAnimation 11s infinite;
		-o-animation: flickerAnimation 11s infinite;
		animation: flickerAnimation 11s infinite;
	}

	.animate-flicker-13 {
		-webkit-animation: flickerAnimation 13s infinite;
		-moz-animation: flickerAnimation 13s infinite;
		-o-animation: flickerAnimation 13s infinite;
		animation: flickerAnimation 13s infinite;
	}

	.animate-flicker-17 {
		-webkit-animation: flickerAnimation 17s infinite;
		-moz-animation: flickerAnimation 17s infinite;
		-o-animation: flickerAnimation 17s infinite;
		animation: flickerAnimation 17s infinite;
	}

	.animate-flicker-19 {
		-webkit-animation: flickerAnimation 17s infinite;
		-moz-animation: flickerAnimation 17s infinite;
		-o-animation: flickerAnimation 17s infinite;
		animation: flickerAnimation 17s infinite;
	}
</style>
