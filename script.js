const users = [
    {id: 1, name:'Jon', age:25},
    {id: 2, name:'Alice', age:30},
    {id: 3, name:'Bob', age:20},
    {id: 4, name:'Sarah', age:35},
    {id: 5, name:'Michael', age:28}
];

const newArr = users.map(({name})=>  name);
   console.log(newArr);


const chek = users.filter(({age}) => age < 18 );
   console.log(chek);

   
const old = users.reduce((acc, user) => acc.age > user.age ? acc : user); 
     console.log(old);


const newId = users.map(({id}) => id);
    console.log(newId);

const sum = users.reduce((acc, item) => acc + item.age, 0);
   console.log(sum); 

const result = sum / 5;
   console.log(result) ;
   
const newArr1 = users.filter(({name, age}) => {
    if(age < 30){
        return name
    }
})   

   console.log(newArr1);

