// getting btn and input container

let showBtn = document.getElementById('showBtn');

let input_container_div = document.querySelector('.input-section-container')

// console.log(showBtn,input_container_div);

// addeventlistner

showBtn.addEventListener('click',()=>{

  if(input_container_div.classList.contains("hide")
  ){
     
    // for showing functionality is here
    input_container_div.classList.remove('hide')
    showBtn.style.cssText += "backgroundcolor:cornflowerblue";
    showBtn.innerText = "hide div";
  }
  else{
//   for hiding funttionality is here
    showBtn.style.cssText += "backgroundcolor:grey";
    input_container_div.classList.add('hide')
    showBtn.innerText = "show div";
     
  }


})









