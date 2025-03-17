
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
const observerCard = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'button') {
          entry.target.classList.add('animate-in'); // Use your actual animation class here
        } else {
          entry.target.classList.add('show'); // For other elements like .card-exp
        }
      }
    });
  }, { threshold: 0.3 });

  const cardExp = document.querySelector('.card-exp');
  observerCard.observe(cardExp);

  const btn = document.getElementById('button');
  observerCard.observe(btn);
   


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




/* use this function hideElementByClass whenever you want to hide a single element*/ 
function hideElementsByClass(className) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
      element.style.display = 'none';
    });
  }


  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-section");
        } else {
          entry.target.classList.remove("animate-section");
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      section.classList.add("section-hidden"); // initially hidden
      observer.observe(section);
    });
  });
  


  /*  submission of email */


  function validateForm(event) {
    event.preventDefault();
    const formContainer = document.querySelector(".cont-form");
    const form = formContainer.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;
    const formData = {};

    // Email validation helper
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Validate each input/textarea
    inputs.forEach(input => {
        const type = input.getAttribute("type") || input.tagName.toLowerCase();
        const value = input.value.trim();

        if (!value) {
            input.style.border = "1px solid red";
            isValid = false;
        } else if (type === "email" && !validateEmail(value)) {
            input.style.border = "1px solid red";
            alert("Please enter a valid email address.");
            isValid = false;
        } else {
            
            formData[input.name] = value;
        }
    });

    if (isValid) {
        emailjs.init('IywptodCY-DUb36Pc');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            position: formData.position,
            company: formData.company,
            message: formData.message
        };

        emailjs.send('service_jonna143', 'template_vzk596j', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email successfully sent!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error sending email. Please try again.');
            });
    }
}
