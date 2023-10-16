// Get the HTML element where you want to display the time difference
const timeElement = document.getElementById('timer');

// Create a function to update the time difference
function updateTimeDifference() {
    // Get the current date and time
    const currentDate = new Date();

    // Set the target date and time to 1674306987 UNIX timestamp
    const targetDate = new Date(timeValue * 1000);

    // Calculate the time difference between the current date and the target date
    const timeDifference = targetDate - currentDate;

    // Convert the time difference to seconds, minutes, hours, and years (absolute value)
    const seconds = Math.abs(Math.floor(timeDifference / 1000));
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    let timeString;

    if (years >= 1) {
        timeString = `${years} years, ${days % 365} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    } else if (days >= 1) {
        timeString = `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    } else if (hours >= 1) {
        timeString = `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    } else if (minutes >= 1) {
        timeString = `${minutes} minutes, ${seconds % 60} seconds`;
    } else {
        timeString = `${seconds} seconds`;
    }

    // Update the innerHTML of the element to show the time difference
    timeElement.innerHTML = `${timeString}`;
}

// Call the updateTimeDifference function initially and then every 1 second
updateTimeDifference(); // Display the initial difference
setInterval(updateTimeDifference, 1000);
