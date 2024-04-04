<script lang="ts">
	import Projects from '../components/Projects.svelte';
	import SupportUs from '../components/SupportUs.svelte';
	import AboutMe from '../components/AboutMe.svelte';
	import Contact from '../components/Contact.svelte';
	import { stars } from '../constants/stars';
	const tabs = ['About me', 'Personal projects', 'Contact', 'Support'];
	let selectedTab = 'About me';
	let expandedContainer = false;

	const selectTab = (tab: string) => {
		if (selectedTab === tab && expandedContainer === false) {
			expandedContainer = true;
		} else {
			expandedContainer = false;
		}
		selectedTab = tab;
	};
</script>

<div class="pageHolder">
	<svg id="boxOfStars" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
		{#each [...stars] as star}
			<circle cx={star.x} cy={star.y} r={star.radius} class={star.class} fill="white" />
		{/each}
	</svg>
</div>
<div class="appContainer" data-sveltekit-preload-data="hover">
	<div class={`navContainer ${expandedContainer ? 'expandedContainer' : ''}`}>
		{#each tabs as tab}
			<button on:click={() => selectTab(tab)} class={tab === selectedTab ? 'selectedTab' : ''}>
				{#if tab === selectedTab && expandedContainer === false}
					<i class="fa-solid fa-bars phoneOnly buttonIcon" />
				{/if}
				{tab}
			</button>
		{/each}
	</div>
	<div style="display: contents">
		<div class="pageContainer">
			{#if selectedTab === 'About me'}
				<AboutMe />
			{:else if selectedTab === 'Personal projects'}
				<Projects />
			{:else if selectedTab === 'Support'}
				<SupportUs />
			{:else if selectedTab === 'Contact'}
				<Contact />
			{/if}
		</div>
	</div>
</div>

<style>
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

	@keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.1;
		}
		100% {
			opacity: 1;
		}
	}
	@-o-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.1;
		}
		100% {
			opacity: 1;
		}
	}
	@-moz-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.1;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.1;
		}
		100% {
			opacity: 1;
		}
	}

	.animate-flicker-7 {
		-webkit-animation: flickerAnimation 7s infinite;
		-moz-animation: flickerAnimation 7s infinite;
		-o-animation: flickerAnimation 7s infinite;
		animation: flickerAnimation 7s infinite;
		animation-delay: -7500ms;
	}

	.animate-flicker-11 {
		-webkit-animation: flickerAnimation 11s infinite;
		-moz-animation: flickerAnimation 11s infinite;
		-o-animation: flickerAnimation 11s infinite;
		animation: flickerAnimation 11s infinite;
		animation-delay: -6000ms;
	}

	.animate-flicker-13 {
		-webkit-animation: flickerAnimation 13s infinite;
		-moz-animation: flickerAnimation 13s infinite;
		-o-animation: flickerAnimation 13s infinite;
		animation: flickerAnimation 13s infinite;
		animation-delay: -4500ms;
	}

	.animate-flicker-17 {
		-webkit-animation: flickerAnimation 17s infinite;
		-moz-animation: flickerAnimation 17s infinite;
		-o-animation: flickerAnimation 17s infinite;
		animation: flickerAnimation 17s infinite;
		animation-delay: -3000ms;
	}

	.animate-flicker-19 {
		-webkit-animation: flickerAnimation 17s infinite;
		-moz-animation: flickerAnimation 17s infinite;
		-o-animation: flickerAnimation 17s infinite;
		animation: flickerAnimation 17s infinite;
		animation-delay: -1500ms;
	}
</style>
