<script setup lang="ts">
	import PageHeading from "../components/PageHeading.svelte";
</script>

<PageHeading>Support</PageHeading>
<div class="supportUsBox">
	<div>
		If you enjoy my work and reckon it's worth a few bucks, please consider donating to:
		<ul>
			<li>
				<a href="https://www.givedirectly.org" target="_blank" rel="noreferrer">givedirectly.org</a
				>;
			</li>
			<li>
				<a href="https://www.againstmalaria.com" target="_blank" rel="noreferrer"
					>againstmalaria.com</a
				>;
			</li>
			<li>any other charity you know is doing good work.</li>
		</ul>
	</div>
	<div>Feel free to let me know and I'll consider it hobby-project income.</div>
</div>

<style>
	.supportUsBox {
		max-width: 550px;
		border-radius: var(--panel-border-radius);
		background-color: var(--panel-background-color);
		padding: var(--panel-padding);
		margin-left: auto;
		margin-right: auto;
	}

	.supportUsBox div {
		margin-bottom: 15px;
	}
</style>
