// let bodyElement=document.body;
// bodyElement.style.background="red";

// const div=document.createElement("div");
// div.style.background="white";
// div.style.width="200px";
// div.style.height="200px";
// div.style.border="2px solid black"
// div.style.margin="300px";
// div.style.borderRadius="100px"

// let heading=document.createElement("h1");
// heading.innerText="Good Morning";
// bodyElement.appendChild(heading)
// bodyElement.appendChild(div);

// document.documentElement.replaceChild(div, document.body);




const body=document.body;
// const div= document.createElement("div");
// div.innerText="Hello World!";
// div.textContent="Hello World!2";
// body.append(div)

// const div=document.querySelector("div");
// const spanHi=document.querySelector("#hi");
// const spaBye=document.querySelector("#bye");
// // console.log(div.textContent);
// // console.log(div.innerText);
// spaBye.remove()
// ;div.append(spaBye);
// // console.log(spanHi.setAttribute("id","hgfdsa"));
// console.log(spanHi.dataset);

// const parent = document.getElementById("box");

// const p1 = document.createElement("p");
// p1.textContent = "First paragraph";

// const p2 = document.createElement("p");
// p2.textContent = "Second paragraph";

// parent.appendChild(p1, p2, " Some text hello world");


// const parent = document.getElementById("box");

// const newPara = document.createElement("p");
// newPara.textContent = "New paragraph";

// parent.prepend(newPara);


// let paragraph= document.getElementById("box");
// let cord= document.getElementById("card");


// paragraph.remove();
// let newCard= card.cloneNode(true);
// document.body.append(newCard)


const parent = document.getElementById("box");
const oldEl = document.getElementById("old");

const newEl = document.createElement("p");
newEl.textContent = "New Text";

parent.replaceChild(newEl, oldEl);
!




