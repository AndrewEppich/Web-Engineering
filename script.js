document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }


    function validateForm() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
            alert("Name and Email are required fields.");
        } else {
            alert("Form submitted successfully!");
            // You can add further logic here to handle form submission (e.g., AJAX request)
        }
    }
});
