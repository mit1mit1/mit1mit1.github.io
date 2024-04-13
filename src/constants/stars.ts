interface Star {
	x: number;
	y: number;
	radius: number;
	class?: string;
	fill: string;
}

const starClasses = [
	'animate-flicker-7',
	'animate-flicker-11',
	'animate-flicker-13',
	'animate-flicker-17',
	'animate-flicker-19'
];

const starBoxPixelWidth = 3840;
const starBoxPixelHeight = 2160;

const starBoxRatioPixelViewport = 8;

export const starBoxViewWidth = starBoxPixelWidth / starBoxRatioPixelViewport;
export const starBoxViewHeight = starBoxPixelHeight / starBoxRatioPixelViewport;

const tempStars: Star[] = [];

const darkMode = false;

let starIndex = 0;
while (starIndex < 1000) {
	tempStars.push({
		x: Math.random() * starBoxViewWidth,
		y: Math.random() * starBoxViewHeight,
		radius: (Math.random() + 1) / (2 * starBoxRatioPixelViewport),
		class: starClasses[Math.floor(Math.random() * starClasses.length)],
		fill: darkMode
			? `rgb(${200 + Math.floor(Math.random() * 54)}, ${200 + Math.floor(Math.random() * 54)}, ${
					200 + Math.floor(Math.random() * 54)
			  })`
			: `rgb(${200 + Math.floor(Math.random() * 50)}, ${200 + Math.floor(Math.random() * 50)}, 0)`
	});
	starIndex++;
}

export const stars = [...tempStars];
