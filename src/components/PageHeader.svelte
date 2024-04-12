<script setup lang="ts">
	import PageHeading from './PageHeading.svelte';
	import PageSubheading from './PageSubheading.svelte';
	export let heading: string;
	export let subHeading: string | undefined = undefined;
</script>

<div class="headerBlock">
	{#if heading}
		<PageHeading>{heading}</PageHeading>
	{/if}
	{#if subHeading}
		<PageSubheading>{subHeading}</PageSubheading>
	{/if}
</div>

<style>
	.headerBlock {
		margin-bottom: 15px;
	}
</style>
