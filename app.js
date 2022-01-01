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
    var node = document.createElement("li");
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
        document.getElementById("tasks").textContent = "Current Tasks: " + document.getElementsByTagName("li").length;
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

//remove task
function removetask() {
    if ((document.getElementById("mylist").innerHTML.trim() == "") != false) {
        alert("No tasks to remove!");
        return;
    }
    alert("Now select the task you want to remove.");
    var listss = document.getElementsByTagName("li");
    if (document.getElementById("cnclbtn") == null) {
        var cancelbutton = document.createElement("button");
    cancelbutton.innerHTML = "cancel";
    cancelbutton.id = "cnclbtn";
    cancelbutton.onclick = function(event) {
        var btn = document.getElementById("cnclbtn");
        btn.remove();
        for (var k=0; k<listss.length; k++) {
            listss[k].onclick = function(event) {}
        }
    }
    document.body.appendChild(cancelbutton);
    }
    for (var k=0; k<listss.length; k++) {
        listss[k].onclick = function(event) {
            document.getElementById("cnclbtn").remove();
            this.remove();
            for (var k=0; k<listss.length; k++) {
                listss[k].onclick = function(event) {}
            }
            alert("Selected task will now be removed.");
            isEmpty();
        }
    }
}