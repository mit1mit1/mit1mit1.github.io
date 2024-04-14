<div class="callingCardGrid">
	<div class="callingCardBox">
		<enhanced:img
			class="mitchMug"
			src="/static/images/smileGlowPosturize.png"
			alt="Another nutjob"
		/>
		<div class="callingCardContents">
			<div class="callingCardTitle">Hey there! I'm Mitch.</div>
			<div class="callingCardParagraph">
				Fullstack engineer, writer, and sometimes a musician.
			</div>
			<div class="callingCardParagraph">
				I've got a background in maths and a passion for philosophy.
			</div>
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
		border-width: 2px;
		border-color: var(--panel-background-color);
		border-style: solid;
	}
	@media (max-width: 479px) {
		.mitchMug {
			display: none;
		}
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
		gap: 20px;
		animation: fadeIn 1s forwards;
		-webkit-animation: fadeIn 1s forwards;
		border-radius: var(--panel-border-radius);
		padding: var(--panel-padding) calc(var(--panel-padding) * 1.5);
		max-width: 600px;
	}

	.callingCardContents {
		vertical-align: top;
		flex-grow: 1;
	}

	.callingCardTitle {
		font-size: 1.2em;
		margin-bottom: 5px;
		font-family: var(--font-family-handwritten);
	}

	.callingCardParagraph {
		margin-bottom: 5px;
		font-family: var(--font-family-alt);
	}
</style>
