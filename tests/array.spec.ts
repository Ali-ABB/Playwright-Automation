import {test,expect} from '@playwright/test'


function findStringinArray(str:string,arr:string[]){

    const arraylenght=arr.length;

    for(let i=0;i<arraylenght;i++){
        const findString= arr[i];
        if(findString===str){
            return str
        }
    

    }

return null

}

test('Seach an item in the array',()=>{
const passArray=['abc','pqr','lmn']
const findvalue ='lmn'
const SearchValue=findStringinArray(findvalue,passArray)
expect(SearchValue===findvalue)
console.log('Found value',SearchValue)
})

test('Seach an item in the array2',()=>{
    const passArray=['abc','pqr','lmn']
    const findvalue ='KKK'
    const SearchValue=findStringinArray(findvalue,passArray)
    expect(SearchValue!==findvalue)
    console.log('No value Found',SearchValue)
    })


    test('Search item in an array using include',()=>{

      const  findvalue='NPQ'
      const givenArray=['NPD','NNM','NPQ','NNT','LMH']

      const valuefound=givenArray.includes(findvalue)
      expect(valuefound).toBe(true)
      console.log(valuefound)
      expect(givenArray).toContain(findvalue)

    })