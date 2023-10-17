// Find the button element by its ID
const gen = document.getElementById("gen");

// Add a click event listener to the button
gen.addEventListener("click", function () {
    // Your script to run when the button is clicked goes here
    let url = '/timer.html?';

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
