import {Page,Locator, expect} from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly successMsg:Locator;
    readonly errorMessage:Locator;
    readonly congratulationMsg:Locator

    constructor(page:Page){
        super(page);
        this.usernameInput=page.getByRole('textbox', { name: 'Username' });
        this.passwordInput=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Submit' });
        this.successMsg=page.getByRole('heading', { name: 'Logged In Successfully' })
        this.errorMessage=page.locator('#error');
        this.congratulationMsg=page.getByText('Congratulations student. You');
    }

    async goto() {
        // Calls the navigateTo method belonging to this instance
        await this.navigateTo('https://practicetestautomation.com/practice-test-login/');
      }

      async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password)
        await this.loginButton.click

      }

    }

    


    




