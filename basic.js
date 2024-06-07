
// inserting value to anywhere

// let food_container = document.getElementById("food_container")



// creating new value to list
let liel = document.createElement('li')
liel.className = 'item'
liel.textContent = "vanakam"
console.log(liel);
// console.log(li.innerText);



food_container.insertAdjacentHTML("beforebegin","vanakam")
food_container.insertAdjacentHTML("beforeend" ,"vanakam")
food_container.insertAdjacentHTML("afterend" ,"bye")
food_container.insertAdjacentHTML("afterbegin" , liel.innerText)
