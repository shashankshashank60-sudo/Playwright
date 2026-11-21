import {test, expect} from '@playwright/test';

test("login to alication", async({page}) => {
    await page.goto('/');
    await page.locator('#username').fill(process.env.SF_USERNAME!);
    await page.getByRole('button', { name:"Log In"}).click();
    await expect(page.locator('#password')).toBeVisible();
    await page.locator('#password').fill(process.env.SF_PASSWORD!);
    await page.getByRole('button', { name:"Log In"}).click();
    await expect(page).toHaveURL(/\/(?:lightning\/|_ui\/identity\/verification\/)/);
    await page.pause();
})

