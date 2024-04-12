<script setup lang="ts">
	import PageHeader from "../components/PageHeader.svelte";
</script>

<PageHeader heading="Contact" />
<div class="contactBox">
	<div>
		<span class="label">Gmail: </span>
		<a href="mailto:guessthetunegame@gmail.com">guessthetunegame@gmail.com</a>
	</div>

	<div>
		<span class="label">LinkedIn: </span>
		<a href="https://www.linkedin.com/in/midly/" target="_blank" rel="noreferrer"
			>linkedin.com/in/midly/</a
		>
	</div>

	<div>
		<span class="label">GitHub: </span>
		<a href="https://github.com/mit1mit1/" target="_blank" rel="noreferrer">github.com/mit1mit1/</a>
	</div>
</div>

<style>
	.contactBox {
		max-width: 280px;
		border-radius: var(--panel-border-radius);
		background-color: var(--panel-background-color);
		padding: var(--panel-padding);
		margin-left: auto;
		margin-right: auto;
	}

	.contactBox div:not(:last-child) {
		margin-bottom: 15px;
	}


	.label {
		min-width: 5em;
		display: inline-block;
	}
</style>
