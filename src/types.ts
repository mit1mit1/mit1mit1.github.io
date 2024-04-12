import { SvelteComponent } from 'svelte';

export type ProjectInfo = {
	name: string;
	description?: string;
	githubAddress?: string;
	siteAddress?: string;
	iconName?: string;
	needsBackground?: boolean;
	fadeInSpeed: 'slow' | 'medium' | 'fast';
};

export interface Tab {
	key?: string;
	title: string;
	description?: string;
	component: typeof SvelteComponent;
	iconClass: string;
}
