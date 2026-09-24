import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test.describe('login happy path',()=>{

    let loginPage=LoginPage;

    test.beforeEach(async({page})=>{
       const loginPage=new LoginPage(page);
        await loginPage.goto();
    })

    test('Login successfully with valid credentials',{tag:['@smoke','@regression']},async ({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.login('student','password123')

       //const success= await loginPage.successMsg.textContent()
       await expect(loginPage.successMsg)
       await expect(loginPage.congratulationMsg)
       if(loginPage.successMsg)
       {
        console.log('User login successful')
       }

    })

    test('Login failed with invalid user',async ({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.login('studentwrong','password123')
        await expect(loginPage.errorMessage)
       if(loginPage.errorMessage)
       {
        console.log('User login failed')
       }

    })
    test('Verify image for Dymitri',{tag:['@smoke','@regression']},async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.login('student','Password123')
        await page.getByRole('link', { name: 'Practice Test Automation', exact: true }).click();
        await expect(page.getByRole('img',{name:'Dmitry Shyshkin, your'}));
        console.log('The instructor image is present')
    
    })
});




