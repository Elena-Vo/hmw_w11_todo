"use strict"

let input = document.getElementById("userInput");
let userList = document.getElementById("userList");
let button = document.querySelector(".saveButton");

button.addEventListener("click", updateList)

function updateList () {
  
  let userInput = input.value;
  const li = document.createElement("li");
  li.addEventListener("click", function() {
    li.classList.toggle("crossed");
  });
  li.textContent = userInput
  userList.append(li)
  
  input.value = ""
};


