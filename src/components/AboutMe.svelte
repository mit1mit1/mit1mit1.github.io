<script setup lang="ts">
	import WavingMe from './WavingMe.svelte';
</script>

<h1>About me</h1>
<div class="aboutMeBox">
	<WavingMe />
	<div class="aboutMeText">
		<div>Hi there! I'm Mitch. I like to wear beanies, if you can't tell.</div>
		<div>
			I have around 7 years of experience building fullstack apps for administration and finance. I mostly work in
			Typescript and Python.
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
	.aboutMeBox {
		display: flex;
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
