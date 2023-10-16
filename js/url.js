// Assuming you have a URL like this:
// https://example.com/page?variableName=variableValue

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the value of a specific parameter, for example, "variableName"
const variableValue = urlParams.get("time");

// Now, variableValue contains the value of "variableName" from the URL.

// You can then use the value as needed, for example, log it to the console
console.log("The value of time is: " + variableValue);
