import {test,expect} from '@playwright/test'

test('Login Test Automation', async({page})=>{//page is a fixture
   await page.goto('https://ctcorphyd.com/SureshIT/login.php')
   

  await page.goto('https://ctcorphyd.com/SureshIT/login.php');

  await page.locator('input[name="txtUserName"]').fill('sureshit');

  await page.locator('input[name="txtPassword"]').fill('sureshit');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('iframe[name="rightMenu"]').contentFrame().getByRole('button', { name: 'Add' }).click();
  await page.locator('iframe[name="rightMenu"]').contentFrame().getByRole('textbox', { name: 'Last Name *' }).click();
  await page.locator('iframe[name="rightMenu"]').contentFrame().getByRole('textbox', { name: 'Last Name *' }).fill('dasari');
  await page.locator('iframe[name="rightMenu"]').contentFrame().locator('input[name="txtEmpFirstName"]').click();
  await page.locator('iframe[name="rightMenu"]').contentFrame().locator('input[name="txtEmpFirstName"]').fill('pooja');
  await page.locator('iframe[name="rightMenu"]').contentFrame().getByRole('button', { name: 'Save' }).click();
  await page.locator('iframe[name="rightMenu"]').contentFrame().locator('html').click();
  await page.getByRole('link', { name: 'Employee List' }).click();

  await page.getByRole('link', { name: 'Logout' }).click();


   await page.waitForTimeout(3000) ;
   
   
console.log("Current Url is:", page.url());


 })