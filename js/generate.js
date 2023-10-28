// Find the button element by its ID
const gen = document.getElementById("gen");

// Add a click event listener to the button
gen.addEventListener("click", function () {

    const short = document.getElementById("short").checked;
    
    // Define the URL prefix based on the "short" checkbox
    let urlPrefix = short ? '/timer.html?' : '/Ltimer.html?';

    let url = urlPrefix; // Initialize the URL with the appropriate prefix

    const timeInput = document.getElementById("unix").value;
    const titleInput = document.getElementById("title").value;
    const show = document.getElementById("show-title").checked;

    // Get the selected option from the "fontstyle" select element
    const fontSelect = document.getElementById("fontstyle");
    const font = fontSelect.options[fontSelect.selectedIndex].value;

    if (timeInput !== "") {
        url += 'time=' + timeInput;
    } else {
        // Access the global variable unixTime
        url += 'time=' + unixTime;
    }

    if (titleInput !== "") {
        url += '&title=' + encodeURIComponent(titleInput);
        if (show !== "") {
            url += '&show=' + encodeURIComponent(show);
        }
    }
    if (font !== "") {
        url += '&font=' + encodeURIComponent(font);
    }

    window.open(url);
});
