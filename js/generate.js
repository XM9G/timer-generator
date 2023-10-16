// Find the button element by its ID
const gen = document.getElementById("gen");

// Add a click event listener to the button
gen.addEventListener("click", function () {
    // Your script to run when the button is clicked goes here
    const url = '/timer.html?time=';
    const time = document.getElementById("unix").value;
    window.open(url + time);
    
});