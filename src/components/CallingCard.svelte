<div class="callingCardGrid">
	<div class="callingCardBox">
		<enhanced:img class="mitchMug" src="/static/images/smileGlowPosturize.png" alt="Another nutjob" />
		<div class="callingCardContents">
			<div class="callingCardTitle">Hey there! I'm Mitch.</div>
			<div class="callingCardParagraph">
				Fullstack engineer by day.
			</div>
			<div class="callingCardParagraph">Writer, mathematician and math-lover by night.</div>
		</div>
	</div>
</div>

<style>
	.callingCardGrid {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 20px;
		justify-content: center;
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
		animation: fadeIn 1s forwards;
		-webkit-animation: fadeIn 1s forwards;
		background-color: var(--panel-background-color);
		border-radius: var(--panel-border-radius);
		padding: var(--panel-padding) calc(var(--panel-padding) * 2	);
		max-width: 600px;
	}

	.callingCardContents {
		vertical-align: top;
		flex-grow: 1;
	}

	.callingCardTitle {
		font-size: 1.45em;
		margin-bottom: 10px;
		font-family: var(--font-family-fancy);
	}

	.callingCardParagraph {
		margin-bottom: 5px;
	}
</style>
