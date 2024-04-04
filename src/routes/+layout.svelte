<script lang="ts">
	import { stars } from '../constants/stars';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	const getRoute = (tab: string) => {
		if (tab === 'About') return '';
	};

	interface Tab {
		name: string;
		route: string;
	}
	const tabs: Tab[] = [
		{ name: 'About me', route: '' },
		{ name: 'Personal projects', route: 'projects' },
		{ name: 'Contact', route: 'contact' },
		{ name: 'Support', route: 'support' }
	];
	let selectedTab = { name: 'About me', route: '' };
	let expandedContainer = false;

	const selectTab = (tab: Tab) => {
		if (selectedTab.name === tab.name && expandedContainer === false) {
			expandedContainer = true;
		} else {
			expandedContainer = false;
		}
		selectedTab = tab;
		goto(`/${tab.route}`);
	};
</script>

<div class="pageHolder">
	<img class="mitchClouds" src={`${base}/images/smileGlowBaW.png`} alt="A nutjob" />
	<svg id="boxOfStars" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
		{#each [...stars] as star}
			<circle cx={star.x} cy={star.y} r={star.radius} class={star.class} fill={star.fill} />
		{/each}
	</svg>
</div>
<div class="appContainer" data-sveltekit-preload-data="hover">
	<div class={`navContainer ${expandedContainer ? 'expandedContainer' : ''}`}>
		{#each tabs as tab}
			<button
				on:click={() => selectTab(tab)}
				class={tab.name === selectedTab.name ? 'selectedTab' : ''}
			>
				{#if tab.name === selectedTab.name && expandedContainer === false}
					<i class="fa-solid fa-bars phoneOnly buttonIcon" />
				{/if}
				{tab.name}
			</button>
		{/each}
	</div>
	<div style="display: contents">
		<div class="pageContainer">
			<slot />
		</div>
	</div>
</div>

<style>
	.appContainer {
		padding-inline: 10px;
		padding-block: 20px;
	}

	.buttonIcon {
		float: left;
		padding-top: 2px;
	}

	@media (min-width: 500px) {
		.phoneOnly {
			display: none;
		}
	}

	:global(h1) {
		font-family: 'Architects Daughter';
		display: none;
	}
	@media (min-width: 500px) {
		:global(h1) {
			display: block;
		}
	}

	.navContainer {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-bottom: 20px;
	}
	@media (min-width: 500px) {
		.navContainer {
			display: flex;
			justify-content: space-evenly;
			margin-bottom: 0px;
		}
	}

	@media (min-width: 800px) {
		.navContainer {
			float: right;
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
		display: none;
		opacity: 80%;
	}
	@media (min-width: 500px) {
		.navContainer button {
			display: inline-block;
		}
	}

	.navContainer button.selectedTab {
		display: inline-block;
	}

	.navContainer.expandedContainer button {
		transition: max-height 0.5s ease-out;
		display: inline-block;
	}

	.navContainer button:hover {
		background-color: #c4c3c3;
	}

	.navContainer .selectedTab {
		background-color: #d7d7d7;
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
		position: relative;
		display: block;
		position: inherit;
		width: 3840px;
		height: 2160px;
		z-index: -1;
		overflow: hidden;
	}

	.mitchClouds {
		z-index: -1;
		position: relative;
		display: block;
		position: inherit;
		width: 2500px;
		z-index: -2;
		overflow: hidden;
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
