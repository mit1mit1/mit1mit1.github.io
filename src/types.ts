export type ProjectInfo = {
	name: string;
	description?: string;
	githubAddress?: string;
	siteAddress?: string;
	iconName?: string;
	needsBackground?: boolean;
	fadeInSpeed: 'slow' | 'medium' | 'fast';
};
