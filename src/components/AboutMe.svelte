<script setup lang="ts">
	import BackendTools from './BackendTools.svelte';
	import DeploymentTools from './DeploymentTools.svelte';
	import FrontendTools from './FrontendTools.svelte';
	import TestingAndObservabilityTools from './TestingAndObservabilityTools.svelte';

	const yearsExperience = new Date().getFullYear() - 2017;
</script>

<h1 class="siteWelcome">Design | logically</h1>
<div class="aboutMeGrid">
	<div class="aboutMeBox">
		<enhanced:img class="mitchMug" src="/static/images/yellGlowClear.png" alt="Another nutjob" />
		<div class="aboutMeContents">
			<div class="aboutMeTitle">Hey there!</div>
			<div class="aboutMeSubtitle">
				I'm Mitch. Full-time fullstack engineer, part-time writer, musician and maker of strange
				expressions.
			</div>
		</div>
	</div>
</div>
<div class="infoGrid">
	<div>
		<div class="infoBox">
			<h2 class="boxTitle">Frontend tools</h2>
			<FrontendTools />
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Backend tools</h2>
			<BackendTools />
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Deployment tools</h2>
			<DeploymentTools />
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Testing and observability tools</h2>
			<TestingAndObservabilityTools />
		</div>
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
				am.
			</div>
			<div class="experienceParagraph">
				At the moment I work in design system engineering and developer enablement.
			</div>
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Education</h2>
			<div class="experienceParagraph">
				While you can certainly be a great software engineer without a degree, it can be helpful.
			</div>
			<div class="experienceParagraph">
				Pure mathematics made me think through the behavior of abstract formal systems.
			</div>
			<div class="experienceParagraph">
				Logic and computational algorithms gave me pretty directly applicable tools to study those
				systems
			</div>
			<div class="experienceParagraph">
				My thesis on the philosophy of mathematics was almost maximally removed from practical
				relevance, but it did stretch my ability to think and write clearly.
			</div>
			<div class="experienceParagraph">
				Plus, it's a lot of fun. So to all the aspiring software gurus out there - get a math
				degree.
			</div>
		</div>
		<div class="infoBox">
			<h2 class="boxTitle">Music</h2>
			<div class="experienceParagraph">
				Somewhere along the way I picked up a taste for playing guitar too. You can check me out at <a
					href="https://www.youtube.com/watch?v=YudszPRA5PA&ab_channel=uncutjams">uncut jams</a
				> if you're ready for a messy, messy cover.
			</div>
			<div class="experienceParagraph">
				On the other hand, if you want to listen to musical savant, I recommend <a
					href="https://www.youtube.com/watch?v=YBgvQ6QKV5k">Bill Wurtz</a
				>.
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
		gap: 20px;
		width: 100%;
	}

	@media (max-width: 767px) {
		.infoGrid {
			flex-wrap: wrap;
		}
	}

	.infoBox {
		max-width: 500px;
		min-width: 250px;
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		padding: var(--panel-padding);
		height: fit-content;
		margin-bottom: 20px;
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
		padding: var(--panel-padding);
		max-width: 600px;
	}

	.aboutMeContents {
		vertical-align: top;
	}

	.aboutMeTitle {
		font-size: 1.35em;
		margin-bottom: 10px;
		font-family: var(--font-family-fancy);
	}

	.aboutMeSubtitle {
		font-size: 0.95em;
		margin-bottom: 10px;
	}

	.experienceParagraph {
		margin-bottom: 10px;
	}
</style>
