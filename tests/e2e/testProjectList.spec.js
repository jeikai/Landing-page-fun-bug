import { test, expect } from '@playwright/test';

test.describe('Landing page flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.funbug.xyz/');
    await page.waitForLoadState('networkidle'); // đảm bảo tải xong nội dung
  });

  test('should navigate through featured projects', async ({ page }) => {
    test.setTimeout(90000);

    await page.getByText(/THIN BARBER/, { exact: false }).click();

    await expect(page.getByRole('heading', { name: 'THIN BARBER SHOP' })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Website Quản lý Dự án' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'RABILOO' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'FUN COURSE' })).toBeVisible();
  });

  test('should click contact info and scroll to sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Xây dựng giải pháp số sáng tạo' }))
      .toBeVisible({ timeout: 10000 });

    await page.getByRole('heading', { name: 'Xây dựng giải pháp số sáng tạo' }).click();

    await expect(page.getByText(/Điện thoại.*0989194097/)).toBeVisible();
    await page.getByText(/Điện thoại.*0989194097/).click();

    await expect(page.getByText(/Email.*funbug0909@gmail.com/)).toBeVisible();
    await page.getByText(/Email.*funbug0909@gmail.com/).click();
  });
});
