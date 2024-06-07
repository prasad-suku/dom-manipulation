

// let food_container = document.getElementById("food_container")


let resync_btn = document.getElementById("resync")
let resync_container = document.getElementById("duplicate")

resync_btn.addEventListener("click",()=>{
    
    // CLEAR THE PREVIES ITEMS
    resync_container.innerHTML=""
    let duplicateclone = food_container.cloneNode(true)
    resync_container.append(duplicateclone)
    // console.log(duplicateclone);
})