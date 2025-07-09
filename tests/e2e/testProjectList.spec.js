import { test, expect } from '@playwright/test';

test.describe('Landing page flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.funbug.xyz/');
  });

  test('should navigate through featured projects', async ({ page }) => {
    test.setTimeout(60000);

    await page.reload();

    await page.getByText('Web PlatformLinkTHIN BARBER').click();
    await expect(page.getByRole('heading', { name: 'THIN BARBER SHOP' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Website Quản lý Dự án' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'RABILOO' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'FUN COURSE' })).toBeVisible();
  });

  test('should click contact info and scroll to sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Xây dựng giải pháp số sáng tạo' })).toBeVisible();
    await page.getByRole('heading', { name: 'Xây dựng giải pháp số sáng tạo' }).click();

    await expect(page.getByText('Điện thoại0989194097')).toBeVisible();
    await page.getByText('Điện thoại0989194097').click();

    await expect(page.getByText('Emailfunbug0909@gmail.com')).toBeVisible();
    await page.getByText('Emailfunbug0909@gmail.com').click();
  });
});
