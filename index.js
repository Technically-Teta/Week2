let id = document.getElementById('head');
id.style.color = 'green'
//create a new list item and store it in a variable.
let newListItem = document.createElement('li')

// Now let's update the text content of that list item.
newListItem.textContent - 'Jalapenos'

//add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem)

let myDiv = document.getElementById('myDiv')

// create a checkbox element
let checkbox = document.createElement("input")

//Assign attributues to the created checkbox

checkbox.type = "checkbox"
checkbox.name = "name"
checkbox.value = " value"
checkbox.id = "id"

//make the label for the checkbox

let label = document.createElement("label")

//assign attributues for the label
label.htmlFor = "id"

//append the created text to the created label
label.appendChild( document.createTextNode("This creates the label for the checkbox"))

// append checkbox and label to div
myDiv.appendChild(checkbox)
myDiv.appendChild(label)

// add css rule to checkbox using id
checkbox.className = "checked"
