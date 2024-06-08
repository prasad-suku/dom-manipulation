
let food_contanerli = document.querySelectorAll(".food_containers li")

let array =[]

food_contanerli.forEach((item)=>{
    array.push(item.innerText)
});

// console.log(array);

let spreadmethod = [...food_contanerli].forEach(item=>console.log(item.textContent));