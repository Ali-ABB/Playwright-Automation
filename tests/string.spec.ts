// import {test , expect} from '@playwright/test';
// import { APIGET, APIPOST } from './api.spec';
// import { request } from 'http';

// function findOTP (otpmsg: string){
// const otplength=6
// const otpmsg1 =otpmsg.split(':')
// const otp=otpmsg1[1].trim();
// const otp2=otp.slice(0,otplength)
// return otp2
// }


// test('verify otp from the message',async()=>{

//     const apiurl= 'https://www.google.com'
//     const otpmsg=await APIGET(apiurl)
//     //const otpmsg ='This is the OTP of your request : 987678. Please do not share with anyone';
//     const otpfound= findOTP(otpmsg);
//     console.log(otpfound);

// });

// test('API POST request',async({request})=>{
//     const url='https://www.google.com'

//     const response=APIPOST(request,url,{'Content-Type':'application/json'},{user:test})
// })
