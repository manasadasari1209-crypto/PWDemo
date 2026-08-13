import{test,expect}from '@playwright/test'


test('Verify Locators', async({page})=>{
await page.goto('https://parabank.parasoft.com/parabank/index.htm');
//page.getByAltText()-Identifies images or similar elements based on Alt attribute
//Use this when your elements have alt attributes
const logo =page.getByAltText('ParaBank');
//
// logo.click();
await expect(logo).toBeVisible();


//page.getByText()-Use this locators to find non-interactive elements like div,span, p
//Finds an element by the text it contains. You can match substring and exact string.

//let Text=page.getByText('Welcome to ParaBank')
//await expect(Text).tobeVisible();
await expect(page.getByText('© Parasoft. All rights reserved.')).toBeVisible();
//await expect(page.getByText('Latest News')).toBeVisible();


//page.getByRole()-Used to Locate by role
//It includes buttons, checkboxes, links, lists, headings, tables etc..

await page.getByRole("link", {name: 'About Us'}).click();
await expect(page.getByRole('heading',{name: 'ParaSoft Demo Website'})).toBeVisible();//getByText can also be used for this.





});

test("TC002_Validate forgot password functionility", async ({page})=>{


    // Open Browser And Launch Parabank
    await page.goto("https://parabank.parasoft.com/parabank/about.htm");


    // Navigate to forgot password link - page


    // Validate whether forgot password link is visible
    let forgotPasswordElement=page.getByRole('link', { name: 'Forgot login info?' });
    //await expect(page.getByRole('link', { name: 'Forgot login info?' })).toBeAttached();
    await expect(forgotPasswordElement).toBeVisible();
    

    // Click on Forgot password link
    forgotPasswordElement.click();

    // Enter username/email

    // Click on submit


    // Validate success message


});
