<script setup lang="ts">
	// import WavingMe from './WavingMe.svelte';
	import { base } from '$app/paths';

	const yearsExperience = new Date().getFullYear() - 2017;
</script>

<h1>About me</h1>
<div class="aboutMeBox">
	<enhanced:img class="mitchMug" src="/static/images/yellGlowClear.png" alt="Another nutjob" />
	<!-- <WavingMe /> -->
	<div class="aboutMeText">
		<div>Hi there! I'm Mitch. I like to wear beanies, if you can't tell.</div>
		<div>
			I have around {yearsExperience} years of experience building fullstack apps for administration
			and finance. I mostly work in Typescript and Python.
		</div>
		<div>
			When I'm not officially working, I dabble in music and math flavoured projects as an excuse to
			try out new languages and frameworks.
		</div>
		<div>
			When I'm not working on <i>those</i>, I enjoy playing the guitar, reading philosophy or
			fantasy, and playing boardgames.
		</div>
	</div>
</div>

<style>
	.mitchMug {
		width: 130px;
		height: 130px;
		border-radius: 130px;
		padding: 10px;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			left: 0;
			opacity: 1;
		}
	}

	.aboutMeBox {
		display: flex;
		position: absolute;
		left: -25px;
		animation: fadeIn 1s forwards;
		-webkit-animation: fadeIn 1s forwards;
	}

	.aboutMeBox div {
		margin-bottom: 15px;
	}

	.aboutMeText {
		display: inline-block;
		vertical-align: top;
		max-width: 520px;
	}
</style>
