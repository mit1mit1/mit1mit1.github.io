import { test } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';

test('title page is accessible', async ({ page }) => {
	await page.goto('/');
	await injectAxe(page);
	await checkA11y(page);
});
