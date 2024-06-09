
// // swapping methods
// let a=12,b=20;
// [b,a]  = [a,b]


// console.log(a,b);
// // console.log(b);


// // simple arithmetic operation on function in destructuring

// let calculates =(a,b)=>{

//     let add = a+b;
//     let sub = a-b;
//     let multi = a*b;

//     return {addition:add,subtraction:sub,multi}
// }

// const{addition,subtraction,multi} = calculates(20,10)

// console.log("add",addition);
// console.log("sub",subtraction);
// console.log("mult",multi);


// // passing parameter as destructuring

// let emp1 = {
//     empname:'arun kumar',
//     age:20,
//     salary:'45,000'

// }

// function empinfo({empname,age,salary})
// {
//     console.log(`name:${empname} age is ${age} and salary is ${salary}`);
// }

// empinfo(emp1)


// // des nested array

// let arrayvalues = [1,24,4,[[31,24,4],54542,43]]

// console.log("------");
// const[a2,b2,c2,[[d,e,f],g,h]]  = arrayvalues

// console.log(a2);
// console.log(b2);
// console.log(d);




// array of obj

// let employessDetail = [ 
//     {name:'prasad',
//         age:20,
//     address:{
//         city:'bhavani',
//         place:'Erode'
//     }
//     }, 
//       {
//         name:'arun',
//         age:30,
//         address:{
//             city:'coimbatore',
//             place:'tamil nadu'
//         }
//     }
// ]


// // dectructuring object

// const[{name:name1,age:age1,address:{city:city1,place:place1}},
//     {name:name2,age:age2,address:{city:city2,place:place2}}
// ] = employessDetail

// console.log("employes 1 detail",name1,age1,city1,place1);
// console.log("employes 2 detail",name2,age2,city2,place2);




// accessing address object in emp object 

let  address = {
    city:'bhavnai',
    place:'erode',
    state:'tamil nade',
   
}

let emp = {
    name:'prasad',
    address,
    
  
}


// console.log(emp);
const{name,address:{city,place,state}} =emp

console.log(city);
console.log(place);
console.log(state);








 



console.log(e);
console.log(h);