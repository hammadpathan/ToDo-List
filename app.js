'use strict'

//code for enter button if user is inside the input box
const enterkey = document.getElementsByClassName("inputtext")[0];
enterkey.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        changelistitem();
    }
})
//if user clicks on textbox, clear the default text
enterkey.addEventListener("click", function() {
    document.getElementById("listadd").value = "";
})

//adds item to list using value in the input box
function changelistitem() {
    var node = document.createElement("LI");
    var addition = document.getElementById("listadd").value;
    var textnode = document.createTextNode(addition);
    node.appendChild(textnode);
    document.getElementById("mylist").appendChild(node);
    isEmpty();
    document.getElementById("listadd").value = "enter task here";
    //get user cursor focus off textbox
    document.getElementById("listadd").blur();
}

//checks if the list containing tasks is empty 
function isEmpty() {
    if ((document.getElementById("mylist").innerHTML.trim() == "") == false) {
        //number of tasks
        document.getElementById("tasks").textContent = "Current Tasks: " + document.getElementById("mylist").getElementsByTagName("li").length;
    }
    else {
        document.getElementById("tasks").textContent = "Current Tasks: None";
    }
  }

//clears all tasks
  function clearitemlist() {
    document.getElementById("mylist").innerHTML = "";
    isEmpty();
  }
