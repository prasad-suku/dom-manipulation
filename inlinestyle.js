
// getting btn 

let btnEl  =  document.getElementById("dommy");
// console.log(btnEl.style);

// applying style through set attributes
// 1st method

btnEl.setAttribute("style", 
"border-radius:10px; color:white;padding:5px 10px; border:none; font-size:15px;background:green;");

console.log(btnEl.style);


// 2nd method through using element.style.properties

btnEl.style.padding = "10px 20px";
btnEl.style.borderRadius = '9px';

// 3rd method through using element.style = "value"

btnEl.style.cssText = "background-color:green;color:white";


btnEl.style.cssText += "border:none;padding:9px 10px;border-radius:8px";
