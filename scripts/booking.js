/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded?  yes they will be loaded with the default initialized values
// When do they need to be reset or updated? on refresh or on change during re declaring

var costPerDayFull = 35; // Default rate for a full day
var costPerDayHalf = 20; // Rate for a half day
var selectedDays = [];
var dayCounter = 0; // Counter for the number of selected days


// DOM Elements
var dayButtons = document.querySelectorAll('.day-selector li');
var fullDayButton = document.getElementById('full');
var halfDayButton = document.getElementById('half');
var clearButton = document.getElementById('clear-button');
var calculatedCostElement = document.getElementById('calculated-cost');


// Event listeners
dayButtons.forEach(function (button) {
    button.addEventListener('click', handleDayClick);
  });
  
  fullDayButton.addEventListener('click', handleFullDayClick);
  halfDayButton.addEventListener('click', handleHalfDayClick);
  clearButton.addEventListener('click', handleClearButtonClick);
  
  // Function to initialize variables
  function initializeVariables() {
    costPerDayFull = 35;
    costPerDayHalf = 20;
    selectedDays = [];
    dayCounter = 0;
    updateUI(); // Call a function to update the UI if needed
  }
  
  // Call the initializeVariables function when the page is loaded
  document.addEventListener('DOMContentLoaded', initializeVariables);
  
  // Functions (for event listeners)
  function handleDayClick(event) {
    var clickedDay = event.target.id;
  
    // Check if the day is already selected
    if (!selectedDays.includes(clickedDay)) {
      // Add the clicked class to the selected day
      event.target.classList.add('clicked');
      selectedDays.push(clickedDay);
      dayCounter++;
      calculateCost();
    }
  }
  
  function handleFullDayClick() {
    // Update rate and classes for full day
    costPerDay = costPerDayFull;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
  }
  
  function handleHalfDayClick() {
    // Update rate and classes for half day
    costPerDay = costPerDayHalf;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
  }
  
  function handleClearButtonClick() {
    // Clear all selections and reset variables
    selectedDays.forEach(function (day) {
      document.getElementById(day).classList.remove('clicked');
    });
    selectedDays = [];
    dayCounter = 0;
    costPerDay = costPerDayFull; // Reset to default rate
    calculateCost();
  }
  
  function calculateCost() {
    var totalCost = dayCounter * costPerDay;
    calculatedCostElement.textContent = totalCost;
  }
  


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



function handleDayClick(event) {
    var clickedDay = event.target.id;
  
    // Check if the day is already selected
    if (!selectedDays.includes(clickedDay)) {
      // Add the clicked class to the selected day
      event.target.classList.add('clicked');
      selectedDays.push(clickedDay);
      dayCounter++;
      calculateCost();
    } else {
      // Remove the clicked class and update variables for deselected day
      event.target.classList.remove('clicked');
      var index = selectedDays.indexOf(clickedDay);
      if (index !== -1) {
        selectedDays.splice(index, 1);
      }
      dayCounter--;
      calculateCost();
    }
  }

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function handleClearButtonClick() {
    // Clear all selections and reset variables
    dayButtons.forEach(function (button) {
      button.classList.remove('clicked');
    });
    selectedDays = [];
    dayCounter = 0;
    calculateCost();
  }



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function handleHalfDayClick() {
    // Update rate and classes for half day
    costPerDay = 20; // Set the daily rate to $20
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
  }

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function handleFullDayClick() {
    // Update rate and classes for full day
    costPerDay = 35; // Set the daily rate back to $35
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
  }


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculateCost() {
    var totalCost = dayCounter * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
  }