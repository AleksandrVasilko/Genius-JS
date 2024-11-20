let elem = document.getElementById("elem");

elem.style.background = "green";

let elements = document.querySelectorAll('ul>li:last-child');

for (element of elements) { 
    console.log(element);
}

let element1 = document.querySelector("li");
console.log(element1);

let element2 = document.getElementsByTagName("div");
console.log(element2);

let textHidden = document.getElementById("textHidden");
textHidden.hidden = false;

let message = document.getElementById("message");
console.log(message.value);

let text = document.querySelector('.text-message');
console.log(text.textContent);

let text1 = document.querySelector('.text');
console.log(text1.textContent);

text1.textContent = "Hello Olga!"
console.log(text1.textContent);

let btn = document.querySelector(".button");
btn.style.backgroundColor = "red";

let text2 = document.querySelector("#p_text");

console.log(text2.classList);
console.log(text2.classList.contains('red'));
text2.classList.remove('red');
console.log(text2.classList.contains('red'));
text2.classList.add("new");
console.log(text2.classList);

let image = document.querySelector(".images");
console.log(image.hasAttribute("src"));
console.log(image.getAttribute("src"));

const item = document.createElement("a");
item.herf = "#";
item.classList.add("btn");
item.textContent = "3"

const nav = document.querySelector(".nav");
nav.appendChild(item);

const heading = document.createElement('h1');
heading.textContent = "Hello";

const container = document.querySelector(".container");
container.insertBefore(heading, nav);

// nav.removeChild(item);
item.remove();

const text_parent = document.querySelector(".text-parent");
const parent = document.querySelector(".parent");

const clone = text_parent.cloneNode(true);
parent.appendChild(clone);

const container_inner = document.querySelector(".container-inner");

const text_inner = `<p>Sorry</p>`;
container_inner.innerHTML += text_inner;

const list = document.querySelector('.list');
list.insertAdjacentHTML("beforebegin", '<p>beforebegin</p>');
list.insertAdjacentHTML("afterbegin", '<li>afterbegin</li>');
list.insertAdjacentHTML("beforeend", '<li>beforeend</li>');
list.insertAdjacentHTML("afterend", '<p>afterend</p>');