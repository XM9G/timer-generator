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


const titleValue = getURLParameter("title");

if (titleValue !== null) {
  // Use the timeValue variable as needed
  console.log("The value of title is: " + titleValue);
} else {
  // Handle the case where the parameter is not present in the URL
  console.log("The 'title' parameter is not present in the URL.");
}


const showValue = getURLParameter("show");


if (showValue !== null) {
  // Use the timeValue variable as needed
  console.log("The value of title is: " + showValue);
} else {
  // Handle the case where the parameter is not present in the URL
  console.log("The 'show' parameter is not present in the URL.");
}