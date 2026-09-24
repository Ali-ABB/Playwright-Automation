// import { test,expect,APIRequestContext } from "@playwright/test"
// import { request } from "http"

// export async function APIGET(url:string) {

//     const respose=await fetch(url,{method:'GET',headers:{'Content-Type':'application/json'}})
    
//     return await respose.text()
// }


// export async function APIPOST(request: APIRequestContext,url:string,headers:Record<string,string>,body:any) {
//     const respose=await request.post(url,{headers,data:body})
//     expect(respose.status()).toBe(200)
    
// }