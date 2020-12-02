/*
------------------------Question 1 ---------------------------
 Is time to create things in the DOM!!. We want you to create a new 
 'div' Element and append it as a child of the element that has the 'id = a-1' 
 (the element is in index.html file)
 all right our new element needs style. For that, assign to the new element the 
 className 'square'!. Each time the user clicks on the new element it has to 
 respond changing the displayed text 'x' to 'o'
 */

// I utilize a variable defined as a1Selector so that I have quick access 
// to the ID #a-1.
var a1Selector = document.querySelector('#a-1');
// A new div is created and assigned to variable newA1Div
var newA1Div = document.createElement('div');
// Class is defined according to instructions
newA1Div.className = 'square';
// The black box was empty - so I included an "x" letter inside the box. 
// This will later be changed to a "o" defined in the function on line 27/28.
newA1Div.textContent = 'x';

// newA1Div is appended as the child to the #a-1 ID.
a1Selector.appendChild(newA1Div);

// I create an event listener that targets the #a-1 ID and waits for a click.
// Upon the click, a function is called
var clickerXO = document.getElementById('a-1').addEventListener("click", xoButtonClicker);
// the function xOButtonClicker targets the newA1Div and replaces the text content
// from "x" to "o"
function xoButtonClicker() {
    newA1Div.textContent = 'o';
}

/*
------------------------Question 2 ---------------------------
 Write a JavaScript program to remove items from a dropdown list.
 In order to create the list we are providing you with the array bellow, 
 those items are the ones you need to add to the dropdown list as the select options
 you also need to create a button that makes the remove action of the element selected
 append the new list as a child of the element with the 'id = a-2'
 append the button as a child of the element with the 'id = a-2'
*/

// Created variable to quickly access #a-2 ID
var a2Selector = document.querySelector("#a-2");

// Given an array of colors to append to my dropdown list
let colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

// This is the creation of my selector menu.
// A "select" menu is created
let colorSelectMenu = document.createElement('select');
// ID of select menu is set to "colorSelectMenu"
colorSelectMenu.id = "colorSelectMenu";
// the options value of the menu is set to the array assigned to the
// variable "colors" (line 51)
colorSelectMenu.options = colors;
// Now I append the colorSelectMenu that was created to be
// a child element of the #a-2 ID.
a2Selector.appendChild(colorSelectMenu);
// Create a new variable called selectColorSelectMenu
let selectColorSelectMenu = document.getElementById('colorSelectMenu');

for (var i = 0; i < colors.length; i++) {
    // option menu element created
    let opt = document.createElement('option');
    // ID of option menu defined as "option"
    opt.id = 'option';
    // value is set to each iterated element of the array 
    // assigned to the variable "colors"
    opt.value = colors[i];
    // text is set to each iterated element of the array
    // assigned to the variable "colors"
    opt.text = colors[i];
    // The option menu is appended to the child of the
    // id #colorSelectMenu
    selectColorSelectMenu.appendChild(opt);
}
// Button is created and defined
let removeButton = document.createElement('button');
// the variable removeButton is assigned an ID of "removeButton"
removeButton.id = "removeButton";
// the variable removeButton is assigned a value of "Select and Remove"
removeButton.value = "Select and Remove";
// I write text inside the button of removeButton so that people can
// understand what the button will do
removeButton.textContent = 'Select and Remove an Element';
// Remove button is appended as the child of #a-2
a2Selector.appendChild(removeButton);
// Now an event listener is created so that when selected and button clicked,
// the selected option from the menu can be deleted
document.getElementById("removeButton").addEventListener("click", removeClicker);
// Function removeClicker is defined
function removeClicker() {
    // colorSelectMenu id is selected
    let selectOption = document.getElementById("colorSelectMenu");
    // Element at ColorSelectMenu is selected removed
    selectOption.remove(colorSelectMenu.selectedIndex);
}




//------------------------Question 3 ---------------------------
// Now lets mix some maths and programming. In the function below (calculate_sphere) write a
// JavaScript program to calculate the volume and surface area of a sphere.
// take the radius from the input value element with the 'id=radius' in the index.html file
// And display the results in the elements with the 'id = volume' and 'id = area' respectively
// hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{
    // radius variable is assigned to the #radius ID selector
    let radius = Number(document.querySelector('#radius').value);
    // formula for volume defined and assigned to variable volumeCalculated
    let volumeCalculated = ( (4/3) * Math.PI * (radius ** 3) );
    // formula for surface area defined and assigned to variable surfaceAreaCalculated
    let surfaceAreaCalculated = ( 4 * Math.PI * (radius ** 2) );

    // volumeReturn assigned to #volume selector
    let volumeReturn = document.querySelector('#volume');
    // surfaceAreaReturned assigned to #area selector
    let surfaceAreaReturned = document.querySelector('#area');

    // assign #volume selector to the results of volume formula
    volumeReturn.value = volumeCalculated;
    // assign #area selector to the results of surface area formula
    surfaceAreaReturned.value = surfaceAreaCalculated;

    // ensures page does not reload. **this line of code
    // may be redundant
    return false;
 }
// executes the function when "calculate" is clicked
document.getElementById('MyForm').onsubmit = calculate_sphere; 





//------------------------Question 4 ---------------------------
// Now in this exercise we want you to create 3 buttons, each with 
// a click action that will hide the respective question's answer 
// above. So if you click the "Hide Question 1" button it will hide 
// from the DOM the answer to your first exercise. If you click it 
// again it will show the answer. 

//resolve // QUESTION 4 here

// Assign #a-4 id selector to a4Selector
let a4Selector = document.getElementById('a-4');

// Create button element and assign it to buttonQuestion1
let buttonQuestion1 = document.createElement('button');
// Assign ID of #button1 to buttonQuestion1
buttonQuestion1.id = 'button1';
// Assign text inside of button to help user understand what button is meant to do
buttonQuestion1.textContent = 'This Button Will Hide and Unhide Question 1';
// append buttonQuestion1 to the child of #a-4 id.
a4Selector.appendChild(buttonQuestion1);

// Selecting button1 element and attaching an event listener to it. On a click,
// unHideQuestion1Clicker activates
document.getElementById("button1").addEventListener("click", unHideQuestion1Clicker);
// unHideQuestionClicker function defined
function unHideQuestion1Clicker() {
    // #a-1 selector assigned to X
    var x = document.getElementById("a-1");
    // if style display === none, (not visible)
    if (x.style.display === "none") {
        // assign block; (make it visible)
      x.style.display = "block";
      // else, make it not visible.
    } else {
      x.style.display = "none";
    }
}

// Same application applied for remaining two buttons
// however names and id's are changed to appropriately
// select the correct id's
let buttonQuestion2 = document.createElement('button');
buttonQuestion2.id = 'button2';
buttonQuestion2.textContent = 'This Button Will Hide and Unhide Question 2';
a4Selector.appendChild(buttonQuestion2);

document.getElementById("button2").addEventListener("click", unHideQuestion2Clicker);
function unHideQuestion2Clicker() {
    var x = document.getElementById("a-2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

let buttonQuestion3 = document.createElement('button');
buttonQuestion3.id = 'button3';
buttonQuestion3.textContent = 'This Button Will Hide and Unhide Question 3';
a4Selector.appendChild(buttonQuestion3);

document.getElementById("button3").addEventListener("click", unHideQuestion3Clicker);
function unHideQuestion3Clicker() {
    var x = document.getElementById("a-3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}