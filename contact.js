


function navigateTo(page) {
    window.location.href = page; // Redirects to the specified page
}


// Initialize EmailJS
emailjs.init("IywptodCY-DUb36Pc");


 function validateForm() {

     
    const formGroups = document.querySelectorAll(".form-group");
    let isValid = true;
    const formData = {};

    formGroups.forEach(group => {
        const input = group.querySelector("input, textarea");
        const inputType = input.getAttribute("type");

        if (!input.value.trim()) {
            input.style.border = "0.1px solid red"; // Highlight empty fields
            isValid = false;
        } else if (inputType === "email" && !validateEmail(input.value)) {
            input.style.border = "0.1px solid red"; // Highlight invalid email
            alert("Please enter a valid email address.");
            isValid = false;
        } else {
            input.style.border = "1px solid rgb(223, 111, 254)"; // Reset valid fields
            formData[input.name] = input.value; // Collect form data
        }
    });

    if (isValid) {
        // Send email via EmailJS
        emailjs.send("service_jonna143", "template_bohol143", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            position:document.getElementById("position").value,
            company: document.getElementById("company").value,
            message: document.getElementById("message").value,
            
        })
        .then(() => {
            alert("Form submitted and email sent successfully!");
        })
        .catch(error => {
            console.error("Error sending email:", error);
    if (error.status) {
        console.error("Status Code:", error.status);
    }
    if (error.text) {
        console.error("Error Message:", error.text);
    }
    alert("There was an error sending the email. Please try again.");
        });
    }
}

// Helper function to validate email using regex
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
