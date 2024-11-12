//document.query : HTML->body->ul->last(third) li

// const element = document.getElementById('myElement');
// //console.log(element);
// const elements = document.getElementsByClassName('list2');
// console.log(elements);

//document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "jim";
let elem=document.querySelector(".list4").innerHTML="jim";

elem=document.querySelector(".list2");
elem.innerHTML='suppp';
//elem.innerHTML="<p>New content</p>";
console.log(elem);

elem = document.querySelector("li a");
elem.style.color='green';

elem = document.querySelector("button");
elem.style.backgroundColor="yellow";
elem.classList.add("huge");
elem.classList.toggle("huge");
elem.classList.toggle("huge");

let elems = document.querySelectorAll("li");
console.log(elems);
elems[1].textContent='elephants';

elem = document.querySelector("a").getAttribute("href");
console.log(elem);
document.querySelector("a").setAttribute("href", "https://www.bingo.com");
console.log(elem);


elem = document.querySelector(".btn");
console.log(elem);
elem.addEventListener('click', function(){
    alert('Element clicked!');
  });

document.getElementById('changeTextButton').addEventListener('click', function() {
const heading = document.getElementById('mainHeading');
heading.textContent = 'Text Changed!';
});