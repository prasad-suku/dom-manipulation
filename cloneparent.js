

// let food_container = document.getElementById("food_container")

// resync btn

let resyncbtn = document.getElementById("resync");

let duplicatecon = document.getElementById("duplicate")

resyncbtn.addEventListener("click",()=>{

    duplicatecon.innerHTML =""

    let getclone = food_container.cloneNode(true)
    duplicatecon.append(getclone);
})

