console.log("hello is this destructing");

// // 1st basic in array

// let arr = [2,'j',534625,4,3,5,5,6,2,44,]

// let[a,...[,...c]] = arr
// console.log(a);
// // console.log(b);
// console.log(c);

// // 2nd method

// let arr2 = [undefined,7,97]

// const[name="no name",b,c2] = arr2

// console.log(name);
// console.log(b);
// console.log(c2);

// // we can asscess directly if the variable already declared
// console.log("------");
// let a1,b1,rest;
 
// [a1,b1, ...rest] = [12,13,42,234,5342,12,432]
// console.log(a1)
// console.log(b1)
// console.log(rest)


console.log("-------");

// destructuring in object


let obj= {a:4,b:5,c:4,d:7}

const{a,b,c} = obj
console.log(a,b,c);

// complex program

let obj2 ={
    name:{firstname:'prasad',lastname:'raja'},
    age:24,
    address:{city:'erode',place:'bhavani',pincode:5987594},
}

// let{name:{firstname},age,address:{city,place}} = obj2;
// console.log(firstname);
// console.log(age);
// console.log(city+": "+place);


// accessing destructuring value in varible name

