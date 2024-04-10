<div class="callingCardGrid">
	<div class="callingCardBox">
		<enhanced:img class="mitchMug" src="/static/images/smileGlowPosturize.png" alt="Another nutjob" />
		<div class="callingCardContents">
			<div class="callingCardTitle">Hey there!</div>
			<div class="callingCardSubtitle">
				I'm Mitch. Full-time engineer, part-time writer, musician and maths nerd.
			</div>
		</div>
	</div>
</div>

<style>
	.callingCardGrid {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
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

	.callingCardBox {
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

	.callingCardContents {
		vertical-align: top;
	}

	.callingCardTitle {
		font-size: 1.35em;
		margin-bottom: 10px;
		font-family: var(--font-family-fancy);
	}

	.callingCardSubtitle {
		font-size: 0.95em;
		margin-bottom: 10px;
	}
</style>
