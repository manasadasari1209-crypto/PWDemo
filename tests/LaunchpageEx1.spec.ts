import{test,expect} from '@playwright/test'//test(create testcases) & expect(assertions/validations) are built in functions need import

test('Login to Practice Test Automation', async({page})=>{//page is a fixture
   await page.goto('https://practicetestautomation.com/practice-test-login/')
   console.log("Current Url is:", page.url());
 })
test('Verify tohaveurl', async({page})=>{
   // Add comments
    await page.goto('https://practicetestautomation.com/practice-test-login/')
   //await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
   await expect(page).toHaveURL(/practice/);//using regular expression using a key word
   await expect(page).toHaveTitle("Test Login | Practice Test Automation");
   console.log("Title of the page:", await page.title())
page.setViewportSize
})
test('large viewport',async({page})=>{
await page.setViewportSize({width: 1920,height: 1080})//Setting resolution of the screen
})



