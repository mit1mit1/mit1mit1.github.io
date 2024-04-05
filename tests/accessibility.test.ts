import { expect, test } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';

test('title page is accessible', async ({ page }) => {
	await page.goto('/');
	await injectAxe(page);
	expect(await page.textContent('h1')).toBe('Design | logically');
	await checkA11y(page);
});
