// /////////////////LIST CREATION PROCESS 
// let ul = document.querySelector('ul');

// ul.addEventListener('click', function handleClick() {
//   // This code will be executed when the user clicks on the ul element.
//   let newListItem = document.createElement('li');
//   newListItem.textContent = 'Jalapenos';
//   ul.appendChild(newListItem);
// });


// let checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// checkbox.name = 'name';
// checkbox.value = 'value';
// checkbox.id = 'checkboxId';
// checkbox.className = 'visible';

// ul.appendChild(checkbox);


// //make the label for the checkbox

// let label = document.createElement("label")

// //assign attributues for the label
// label.htmlFor = "checkboxId";

// //append the created text to the created label
// label.appendChild(document.createTextNode("This creates the label for the checkbox"))

// // append checkbox and label to div
// myDiv.appendChild(checkbox)
// myDiv.appendChild(label)

//ADDITION 1: 
//change the document's text color on click:

//create the button and assign the id
let btn = document.getElementById('btn')

// add event listener
btn.addEventListener('click', function () {
  //let this apply to the first paragraph 
  let  firstP = document.getElementById("mydescription");
  console.log(firstP);
  firstP.style.color = 'red';
  firstP.style.backgroundColor = 'yellow';
 
})

// // ADDITION 2:
// //change an element's text color on mouseover:
const box = document.getElementById('box');

// //  Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
   box.style.color = 'red';
});

// // Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

//ADDITION 3: 
//add the date and time to the site up on entry

// Function to get the current date and time
function getCurrentDateTime() {
  let now = new Date();
  let date = now.toDateString(); // Get the date in human-readable format
  let time = now.toLocaleTimeString(); // Get the time in human-readable format
  let pTag = document.getElementById("dateTimeDisplay");
  pTag.innerHTML = `current date: ${date} time: ${time}`
    

}
// Call the function when the page loads
getCurrentDateTime();




 
