// when the add button is clicked
// read the input, add as li to ul list

// when the li is clicked add a striktrhough decoration by add "done" class to li


// get the button element from the html
let addButton = document.getElementById("addButton")
// add event listener to activate on click

let handleLiClick = function(event){
    console.log("event ", event)
    console.log("the li got clicked!")
    let li = event.target
    if (li.className == "done") {
        li.className = ""
    } else {
        li.className = "done"
    }
}

let handleAddButton = function(){
    console.log("the button was clicked")
    let input = document.getElementById("input")
    let todo = input.value
    console.log("input =", todo)

    let ul = document.getElementById("items")
    let li = document.createElement("li")

    li.innerText = todo
    ul.appendChild(li)

    input.value = null

    li.addEventListener('click', handleLiClick)
}

addButton.addEventListener('click', handleAddButton)