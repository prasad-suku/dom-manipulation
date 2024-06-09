
let traversing_child = document.querySelector('.food_containers')

let traversing_parent = document.querySelector(".food_containers li")
// console.log(traversing_parent);



console.log(traversing_parent.parentElement)
console.log(traversing_parent.closest("body"))
console.log(traversing_child);



// accesing child through parent

let secchild = traversing_child.children[1].textContent;
console.log(secchild.previousSiblingElement)
console.log(traversing_child.childElementCount);
console.log(traversing_child.childNodes);
console.log(traversing_child);

// finding sibling element

let siblignlastel = traversing_parent.nextElementSibling.nextElementSibling.textContent;
console.log(traversing_parent.nextElementSibling.textContent);