import { test, expect } from '@playwright/test';

test.describe('Header navigation scroll behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.funbug.xyz/');
  });

  test('should scroll to "Dịch vụ" section when clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Dịch vụ' }).click();
    await expect(page.getByRole('heading', { name: 'Dịch vụ của chúng tôi' })).toBeVisible();
  });

  test('should scroll to "Thành tựu" section when clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Thành tựu' }).click();
    await expect(page.getByRole('heading', { name: 'Thành tựu đạt được' })).toBeVisible();
  });

  test('should scroll to "Dự án" section when clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Dự án', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Dự án nổi bật' })).toBeVisible();
  });

  test('should scroll to "Liên hệ" section when clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Liên hệ', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Liên hệ với chúng tôi' })).toBeVisible();
  });
});
