import{test,expect,Locator}from '@playwright/test'

//lauching the application
test('Verify if Login success functionality of Practice automation page', async({page})=>{
await page.goto('https://practicetestautomation.com/');
//Click on Practice link to login
await page.getByText('Practice', { exact: true }).click();
//Click on Test login page
await page.getByRole("link", {name: 'Test Login Page'}).click();
//Enter login credentails
await page.getByRole('textbox', { name: 'Username' }).fill('student')
await page.getByRole('textbox', { name: 'Password' }).fill('Password123')
//click on submit button
await page.getByRole('button', { name: 'Submit' }).click()
//Verify the success message after login
await expect(page.getByText('Logged In Successfully', { exact: true })).toBeVisible()
await expect(page.getByText('Congratulations student. You successfully')).toBeVisible()
//Click on Contact and enter details
await page.getByRole('link', { name: /Contact/i }).click();
await page.getByRole('textbox', { name: 'First' }).fill('xyz')
await page.getByRole('textbox', { name: 'Last' }).fill('abc')
//await page.getByRole('textbox', { name: /Email \*/i }).fill('xyz.abc')//Entering invalid email and verifying
//await expect(page.getByLabel('Please enter a valid email address.')).toBeVisible();
await page.getByRole('textbox', { name: 'Email *' })//modified to valid email address
await page.getByRole('textbox', { name: 'Comment or Message *' }).fill('New message!');
//Verify the message when submitted without entering Captcha
await expect(page.getByText('Form has not been submitted, please see the errors below.', { exact: true })).toBeVisible();
//Click on log out button
await page.getByRole('link', { name: 'Log out' }).click()

})