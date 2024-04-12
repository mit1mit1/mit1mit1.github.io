<div class="infoGrid">
	<slot />
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
</style>