import { test, expect } from '@playwright/test';

test('github has Github in title and sign in link to the login page', async ({ page }) => {
    await page.goto('https://github.com');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/GitHub/);

    // create a locator
    const signIn = page.getByText('Sign in');

    // Expect an attribute "to be strictly equal" to the value.
    await expect(signIn).toHaveAttribute('href', '/login');

    // Click the sign in link.
    await signIn.click();

    // Expects the URL to contain login.    
    await expect(page).toHaveURL(/.*login/);

});