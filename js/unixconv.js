// Declare a global variable to store unixTime
var unixTime;

const convertButton = document.getElementById("gen");
const resultElement = document.getElementById("result");

gen.addEventListener("click", function () {
    // Get the date and time values from the input elements
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;

    // Combine the date and time into a single string
    const dateTimeString = dateInput + "T" + timeInput;

    // Convert the combined date and time to a Unix timestamp in seconds
    unixTime = Math.floor(new Date(dateTimeString).getTime() / 1000);
});
