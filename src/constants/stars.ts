interface Star {
	x: number;
	y: number;
	radius: number;
	class?: string;
}

const starClasses = [
	'animate-flicker-7',
	'animate-flicker-11',
	'animate-flicker-13',
	'animate-flicker-17',
	'animate-flicker-19',
];

const tempStars: Star[] = [];

let starIndex = 0;
while (starIndex < 1000) {
	tempStars.push({
		x: Math.random() * 480,
		y: Math.random() * 270,
		radius: Math.random() / 8,
		class: starClasses[Math.floor(Math.random() * starClasses.length)]
	});
	starIndex++;
}

export const stars = [...tempStars];
