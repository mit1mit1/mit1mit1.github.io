<script setup lang="ts">
	import { projectList } from '../constants/projects';
	import { prettifyAddress } from '../utils/stringManipulation';
	import { base } from '$app/paths';
</script>

<h1>Personal projects</h1>
<div class="subheading">In decreasing order of polish</div>
<div class="projectsContainer">
	{#each projectList as project}
		<div
			class={`projectBox ${project.fadeInSpeed === 'slow' && 'slowFade'} ${
				project.fadeInSpeed === 'medium' && 'mediumFade'
			} ${project.fadeInSpeed === 'fast' && 'fastFade'}`}
		>
			{#if project.siteAddress}
				<a href={project.siteAddress} target="_blank" rel="noreferrer">
					<h2 class="projectTitle">
						{#if project.iconName}
							<img
								class={`boxIcon ${project.needsBackground ? 'withBackground' : ''}`}
								src={`${base}/images/${project.iconName}`}
								alt={`Picture of ${project.name}`}
							/>
						{/if}
						<span>{project.name}</span>
					</h2>
				</a>
			{:else}
				<span>
					<h2 class="projectTitle">
						{#if project.iconName}
							<img
								class={`boxIcon ${project.needsBackground ? 'withBackground' : ''}`}
								src={`${base}/images/${project.iconName}`}
								alt={`Picture of ${project.name}`}
							/>
						{/if}
						<span>{project.name}</span>
					</h2>
				</span>
			{/if}
			<div class="detailsBox">
				{#if project.githubAddress}
					<div>
						Github: <a href={project.githubAddress} target="_blank" rel="noreferrer"
							>{prettifyAddress(project.githubAddress)}</a
						>
					</div>
				{/if}
				{#if project.description}
					<div>{project.description}</div>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.projectsContainer {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}
	@media (max-width: 479px) {
		.projectsContainer {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.slowFade {
		animation: fadeIn 1.5s;
	}

	.mediumFade {
		animation: fadeIn 1s;
	}

	.fastFade {
		animation: fadeIn 0.5s;
	}

	.projectBox {
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		max-width: 510px;
		padding: var(--panel-padding);
	}

	.projectTitle {
		font-family: var(--font-family-fancy);
		margin-bottom: 5px;
		margin-top: 5px;
		display: flex;
		margin-right: 10px;
		align-items: center;
		display: flex;
	}

	.boxIcon {
		width: 40px;
		height: 40px;
		vertical-align: bottom;
		margin-right: 10px;
	}

	.withBackground {
		background-color: #d7d8c7;
		border-radius: 10px;
	}

	h1 {
		margin-bottom: 5px;
	}

	.detailsBox {
		padding: 5px 0px;
		margin: 5px 0px;
	}

	.detailsBox > *:not(:last-child) {
		margin-bottom: 10px;
	}

	.subheading {
		margin-bottom: 15px;
		font-style: italic;
		font-family: var(--font-family-fancy);
		font-size: 1.2em;
		display: inline-block;
	}
</style>
