
/*function to toggle a button */



function showHideDiv(className) {
    const elements = document.getElementsByClassName(className); // Get divs to toggle
    const menuIcons = document.getElementsByClassName("menu-icon"); // Get menu icons
    const closeIcons = document.getElementsByClassName("close-icon"); // Get close icons

    if (elements.length > 0) {
        const div = elements[0]; // First div with the class

        // Toggle div visibility
        if (div.style.display === "none" || div.style.display === "") {
            div.style.display = "block"; // Show div
            toggleIcons(menuIcons, closeIcons, true);
        } else {
            div.style.display = "none"; // Hide div
            toggleIcons(menuIcons, closeIcons, false);
        }
    } else {
        console.error("No elements found with class:", className);
    }
}

// Helper function to toggle icon visibility
function toggleIcons(menuIcons, closeIcons, showClose) {
    for (let i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.display = showClose ? "none" : "inline";
    }
    for (let i = 0; i < closeIcons.length; i++) {
        closeIcons[i].style.display = showClose ? "inline" : "none";
    }
}


let lastWidth = window.innerWidth;

window.addEventListener("resize", function() {
    if (window.innerWidth !== lastWidth) {
        location.reload();
        lastWidth = window.innerWidth; // Update the stored width
    }
});