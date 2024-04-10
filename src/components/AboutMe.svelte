<script setup lang="ts">
	import InfoBox from './InfoBox.svelte';
	import ToolStack from './ToolStack.svelte';
	import CallingCard from './CallingCard.svelte';

	const yearsExperience = new Date().getFullYear() - 2017;
</script>

<h1 class="siteWelcome">Design · Logically</h1>
<CallingCard />
<div class="infoGrid">
	<div>
		<InfoBox title="Experience">
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
		</InfoBox>
		<InfoBox title="Music">
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
		</InfoBox>
	</div>
	<div>
		<InfoBox title="Education">
			<div class="experienceParagraph">
				While you can be a great software engineer without a degree, it does help.
			</div>
			<div class="experienceParagraph">
				Pure mathematics is a foundation for studying abstract formal systems. Logic and
				computational algorithms provide tools to study those systems.
			</div>
			<div class="experienceParagraph">
				Arts subjects in general, and philosophy in particular, stretch your ability to think and
				write clearly.
			</div>
			<div class="experienceParagraph">
				Plus, the whole thing is a lot of fun. So to all the aspiring software gurus out there - get a math
				degree.
			</div>
		</InfoBox>
	</div>
</div>

<style>
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

	.experienceParagraph {
		margin-bottom: 10px;
	}
</style>
