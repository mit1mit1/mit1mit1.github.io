import type { ProjectInfo } from '../types';

export const projectList: Array<ProjectInfo> = [
	{
		name: 'Software Dev Resources',
		description: `Notes on some resources I've found helpful as a software developer, and a comic based on some of the notes.`,
		githubAddress: 'https://github.com/mit1mit1/software-dev-resources',
		siteAddress: 'https://mit1mit1.github.io/software-dev-resources',
		iconName: 'beanie.ico',
		needsBackground: true,
		fadeInSpeed: 'fast'
	},
	{
		name: 'Guess the Tune',
		description: 'A wordle-like game designed to teach sheet music reading.',
		githubAddress: 'https://github.com/mit1mit1/guess-the-tune',
		siteAddress: 'https://mit1mit1.github.io/guess-the-tune',
		iconName: 'musicle.ico',
		fadeInSpeed: 'medium'
	},
	{
		name: 'Newtonian Dog Fighter',
		description: 'Fly small circles around bigger ones and run into each other.',
		githubAddress: 'https://github.com/mit1mit1/newtonian-dog-fighter-3000',
		siteAddress: 'https://mit1mit1.github.io/newtonian-dog-fighter-3000',
		iconName: 'newtonian.png',
		fadeInSpeed: 'slow'
	},
	{
		name: 'Explomandlebrot',
		description:
			'An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.',
		githubAddress: 'https://github.com/mit1mit1/explomandlebrot',
		siteAddress: 'https://mit1mit1.github.io/explomandlebrot',
		iconName: 'mandlebrot.ico',
		fadeInSpeed: 'medium'
	},
	{
		name: 'Napoleonic Chess Simulator',
		description:
			'Learn French, play chess, and fail history class. Featuring art by Tom Su (contact details available on request).',
		githubAddress: 'https://github.com/mit1mit1/napoleonic-chess-simulator-3000',
		siteAddress: 'https://mit1mit1.github.io/napoleonic-chess-simulator-3000',
		iconName: 'Napoleon.svg',
		needsBackground: true,
		fadeInSpeed: 'slow'
	}
];
