import { faker } from '@faker-js/faker'; 
 


  export const  functionGenerator = () =>{
    const USERS = [];

    function createRandomUser(){
     return {
       secondaryAddress:[faker.address.latitude(),faker.address.longitude()],
     };
   } 
   Array.from({ length: 1 }).forEach(() => {
     USERS.push(createRandomUser());
   })

   return  USERS
  }