


/////////////////LIST CREATION PROCESS 
//create a new list item and store it in a variable.
let newListItem = document.createElement('li')

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos'

//add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem)


////////////CHECKBOX CREATION PROCESS
const myDiv = document.getElementById("myDiv")

// create a checkbox element
let checkbox = document.createElement("input")

//Assign attributues to the created checkbox

checkbox.type = "checkbox"
checkbox.name = "name"
checkbox.value = " value"
checkbox.id = "checkboxId"
checkbox.className = "visible"

//make the label for the checkbox

let label = document.createElement("label")

//assign attributues for the label
label.htmlFor = "checkboxId";

//append the created text to the created label
label.appendChild( document.createTextNode("This creates the label for the checkbox"))

// append checkbox and label to div
myDiv.appendChild(checkbox)
myDiv.appendChild(label)

//ADDITION 1
//change the document's text color on click:

//create the button and assign the id
let btn = document.getElementById('btn')

// add event listener
btn.addEventListener('click',function onclick(event) {
    //let this apply to the whole body
  document.body.style.color = 'darkgreen';
  event.target.style.color = 'salmon'
})

// ADDITION 2
//change an element's text color on mouseover:
const box = document.getElementById('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

//ADDITION 3 
//add the date and time to the site up on entry

// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toDateString(); // Get the date in human-readable format
    const time = now.toLocaleTimeString(); // Get the time in human-readable format

    return { date, time };
}

// Function to update the HTML element with the current date and time
function updateDateTimeDisplay() {
    const dateTime = getCurrentDateTime();
    const dateTimeDisplayElement = document.getElementById('dateTimeDisplay');

    // Update the HTML element content
    dateTimeDisplayElement.textContent = `Current date: ${dateTime.date}, Current time: ${dateTime.time}`;
}

// Call the function when the page loads
window.addEventListener('load', updateDateTimeDisplay);



