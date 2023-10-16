function getURLParameter(parameterName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameterName);
}

const timeValue = getURLParameter("time");

if (timeValue !== null) {
  // Use the timeValue variable as needed
  console.log("The value of time is: " + timeValue);
} else {
  // Handle the case where the parameter is not present in the URL
  console.log("The 'time' parameter is not present in the URL.");
}