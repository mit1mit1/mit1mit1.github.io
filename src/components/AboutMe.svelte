<script setup lang="ts">
	const yearsExperience = new Date().getFullYear() - 2017;
	const age = new Date().getFullYear() - 1998;
</script>

<h1 class="siteWelcome">Design | logically</h1>
<div class="aboutMeGrid">
	<div>
		<div class="aboutMeBox">
			<enhanced:img class="mitchMug" src="/static/images/yellGlowClear.png" alt="Another nutjob" />
			<div class="aboutMeText">
				Hello there! I'm Mitch. I make web apps cleaner, faster and better.
			</div>
		</div>
	</div>
</div>
<div class="infoGrid">
	<div class="infoSideBox">
		<h2>What I use</h2>

		<h3>Frontend</h3>
		<ul>
			<li>
				<b>React</b> is my library of choice for heavier projects;
			</li>
			<li>
				<b>Svelte</b> is my framework of choice for lighter ones;
			</li>
			<li>
				<b>Typescript</b> is amazing (typed > untyped);
			</li>
			<li>
				<b>Zustand</b> is my current favorite State Management library, though I'll take
				<b>Redux</b> if I have to;
			</li>
			<li>
				<a href="https://cssinjs.org/?v=v10.10.0">JSS</a> is my current favorite styling library for
				applications, though I prefer good old <b>Sass</b> for design systems;
			</li>
		</ul>

		<h3>Backend</h3>
		<ul>
			<li>
				<b>Python</b> is easy to use at first, but dynamic languages get real painful in a monolith (typed
				> untyped);
			</li>
			<li>
				<b>C++</b> is good fun for computation heavy hobby projects;
			</li>
			<li>
				<b>PostgresQL</b> is my preferred DB to work with;
			</li>
		</ul>

		<h3>Deployment</h3>
		<ul>
			<li>
				<b>GitHub Actions</b> do the trick for hobby projects, but <b>Buildkite</b> + <b>Docker</b>
				is my favorite tool so far for consistent rich pipelines (<b>TeamCity</b> was a bit clunkier
				in my experience);
			</li>
			<li>
				<b>Terraform</b> is brilliant;
			</li>
			<li>
				<b>AWS</b> is the cloud platform I most regularly use;
			</li>
		</ul>

		<h3>Testing and Observability</h3>
		<ul>
			<li>
				<b>React Testing Library</b> is brilliant;
			</li>
			<li>
				<b>Cypress</b> is okay, <b>Playwright</b> is better;
			</li>
			<li>
				<b>Datadog</b> is good, <b>Heap</b> is good;
			</li>
			<li>
				<b>Axe Devtools</b> are excellent;
			</li>
		</ul>
	</div>
	<div class="infoBottomBox">
		<h2>Experience</h2>

		<div class="experienceParagraph">
			For the past {yearsExperience} and a bit years I've been building apps on everything from
			<code>Laravel / jQuery</code>
			to <code>Python / React</code>. I've built greenfield projects from the ground up and I've
			refactored software older than I am (according to my calculations, {age}). At the moment I'm
			working in developer experience and design system engineering.
		</div>
		<div class="experienceParagraph">
			I have a B. Sc. Mathematics with specializations in computational algorithms, logic and
			philosophy.
		</div>
		<div class="experienceParagraph">
			Somewhere along the way I picked up a taste for playing guitar too. You can check me out at <a
				href="https://www.youtube.com/watch?v=YudszPRA5PA&ab_channel=uncutjams">uncut jams</a
			> if you're ready for a messy trip of a song.
		</div>
	</div>
</div>

<style>
	.aboutMeGrid {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.infoGrid {
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		width: 100%;
	}
	.infoSideBox {
		max-width: 500px;
	}
	.infoBottomBox {
		max-width: 500px;
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

	.aboutMeBox {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		position: relative;
		left: -25px;
		animation: fadeIn 1s forwards;
		-webkit-animation: fadeIn 1s forwards;

		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 10px;
		margin-right: 25px;
		padding: 15px;
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
