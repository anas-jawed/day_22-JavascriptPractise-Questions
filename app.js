// Qsl. Create a new input and button element on the page using JavaScript only. Set the  
// text of button to "Click me' 


let input = document.createElement("input");
let button = document.createElement("button");
input.innerHTML = "";
button.innerHTML = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Qs2. Add following attributes to the element : 
// Change placeholder value of input to "username" 
// Change the id of button to "btn'

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Qs3. Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white.

let btn = document.querySelector("#btn");

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practise</u>";
document.querySelector("body").append(h1);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", 
// where Delta is bold.

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Detla</b>Practise,"
document.querySelector("body").append(para);