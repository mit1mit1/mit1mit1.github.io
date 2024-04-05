<script setup lang="ts">
	import WhatIUse from './WhatIUse.svelte';

	const yearsExperience = new Date().getFullYear() - 2017;
	const age = new Date().getFullYear() - 1998;
</script>

<h1 class="siteWelcome">Design | logically</h1>
<div class="aboutMeGrid">
	<div>
		<div class="aboutMeBox">
			<enhanced:img class="mitchMug" src="/static/images/yellGlowClear.png" alt="Another nutjob" />
			<div class="aboutMeText">
				<div>Hello there!</div>
				<div>I'm Mitch.</div>
				<div>I make web apps cleaner, faster and better.</div>
			</div>
		</div>
	</div>
</div>
<div class="infoGrid">
	<div class="infoBox">
		<h2 class="boxTitle">What I use</h2>
		<WhatIUse />
	</div>
	<div>
		<div class="infoBox">
			<h2 class="boxTitle">Experience</h2>
			<div class="experienceParagraph">
				For the past {yearsExperience} and a bit years I've been building apps on everything from
				<code>Laravel / jQuery</code>
				to <code>Python / React</code>.
			</div>
			<div class="experienceParagraph">
				I've built greenfield projects from the ground up and I've refactored software older than I
				am (according to my calculations, {age}).
			</div>
			<div class="experienceParagraph">
				At the moment I work in developer experience and design system engineering.
			</div>
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Education</h2>
			<div class="experienceParagraph">
				I have a B. Sc. Mathematics with specializations in computational algorithms, logic and
				philosophy.
			</div>
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Music</h2>
			<div class="experienceParagraph">
				Somewhere along the way I picked up a taste for playing guitar too. You can check me out at <a
					href="https://www.youtube.com/watch?v=YudszPRA5PA&ab_channel=uncutjams">uncut jams</a
				> if you're ready for a messy trip of a song.
			</div>
		</div>
	</div>
</div>

<style>
	.aboutMeGrid {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}
	.infoGrid {
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		width: 100%;
	}
	.infoBox {
		max-width: 500px;
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		padding: var(--panel-padding);
		height: fit-content;
		margin-bottom: 30px;
	}

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

	.boxTitle {
		margin-top: 0px;
	}

	.aboutMeBox {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		position: relative;
		left: -25px;
		animation: fadeIn 1s forwards;
		-webkit-animation: fadeIn 1s forwards;
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		margin-right: 25px;
		padding: var(--panel-padding);
		max-width: 600px;
	}

	.aboutMeText {
		vertical-align: top;
		font-style: italic;
		font-family: 'Architects Daughter';
		font-size: 1.2em;
	}

	.experienceParagraph {
		margin-bottom: 10px;
	}
</style>
