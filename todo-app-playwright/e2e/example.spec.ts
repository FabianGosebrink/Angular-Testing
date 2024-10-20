import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TodoAppPlaywright/);
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.locator('#todoinput')).toBeEmpty();
  await page.locator('#todoinput').click();
  await page.locator('#todoinput').fill('my first todo');
  await page.getByRole('button', { name: 'Add Todo' }).click();
  await expect(page.getByText('my first todo')).toBeVisible();
});






