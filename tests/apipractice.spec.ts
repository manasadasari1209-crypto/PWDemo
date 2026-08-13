import{test,expect}from'@playwright/test';
test('Get API Response',async({request})=>{

const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
const responsebody=await response.json();
console.log(responsebody);

const responsetitle=await response.json();
console.log(responsetitle);
//console.log("Responsecode:", response.status())//Print the status code
expect(response.status()).toBe(200);//verify the GET req returns status code
 
//expect(responsebody.id).toBe(1)--returns error
expect(responsebody.userId).toBe(1)//verifying if the userId is correct

expect(responsebody.id).toBe(1);
})