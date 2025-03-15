
/*function to toggle a button 



function showHideDiv(className) {
    const elements = document.getElementsByClassName(className); // Get divs to toggle
    const menuIcons = document.getElementsByClassName("menu-icon"); // Get menu icons
    const closeIcons = document.getElementsByClassName("close-icon"); // Get close icons
*/

function showHideDiv(divClass, menuIconClass, closeIconClass) {
    const elements = document.getElementsByClassName(divClass); // Divs to toggle
    const menuIcons = document.getElementsByClassName(menuIconClass); // Menu icons
    const closeIcons = document.getElementsByClassName(closeIconClass);
    

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

/*realtime monitoring of width */

let lastWidth = window.innerWidth;

window.addEventListener("resize", function() {
    if (window.innerWidth !== lastWidth) {
        location.reload();
        lastWidth = window.innerWidth; // Update the stored width
    }
});


function showText(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none" || getComputedStyle(elements[i]).display === "none") {
            elements[i].style.display = "block";
        } else {
            elements[i].style.display = "none";
        }
    }
}

/*function to show the animation of elements when the scroll is in the area */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  const cardExp = document.querySelector('.card-exp');
  observer.observe(cardExp);


  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});