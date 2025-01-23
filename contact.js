


function navigateTo(page) {
    window.location.href = page; // Redirects to the specified page
}


function navigateTo(page) {
    window.location.href = page; // Redirects to the specified page
}

function validateForm() {
    const formGroups = document.querySelectorAll(".form-group");
    let isValid = true;
    const formData = {};

    // Helper function to validate email using regex
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

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
        emailjs.init('IywptodCY-DUb36Pc'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

        var templateParams = {
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
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error sending email. Please try again.');
            });
    }
}
