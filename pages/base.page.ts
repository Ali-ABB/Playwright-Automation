import{Page,Locator} from '@playwright/test'

export class BasePage{
     readonly page:Page;
     


    constructor (page:Page){
        this.page=page;
        
    }


    //Navigate to the URL

    async navigateTo(path:string){
        await this.page.goto(path)





    }



    

}

