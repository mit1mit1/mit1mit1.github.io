<script setup lang="ts">
	/* Yes, this component's name is a Jacob Collier reference */
	import { stars } from '../constants/stars';
</script>

<div class="pageHolder">
	<svg id="boxOfStars" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
		{#each [...stars] as star}
			<circle cx={star.x} cy={star.y} r={star.radius} class={star.class} fill={star.fill} />
		{/each}
	</svg>
</div>

<style>
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
