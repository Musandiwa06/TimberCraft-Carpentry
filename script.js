
document.addEventListener("DOMContentLoaded", function () {

    // Formspree endpoint for both forms
    const formspreeURL = "https://formspree.io/f/mwllwqbp";

    // Reusable AJAX form submission function
    async function submitForm(form, statusMessage, successText) {
        const submitButton = form.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        if (submitButton) {
            submitButton.disabled = true;
        }

        statusMessage.textContent = "Sending your message...";

        try {
            const formData = new FormData(form);

            const response = await fetch(formspreeURL, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                statusMessage.textContent = successText;
                form.reset();
            } else {
                statusMessage.textContent =
                    "Sorry, your message could not be sent. Please try again.";
            }

        } catch (error) {
            statusMessage.textContent =
                "There was a connection problem. Please check your internet and try again.";
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    }

    // Enquiry page: service selection messages
    const serviceSelect = document.querySelector("#service");
    const serviceMessage = document.querySelector("#service-message");

    if (serviceSelect && serviceMessage) {
        serviceSelect.addEventListener("change", function () {

            if (serviceSelect.value === "furniture") {
                serviceMessage.textContent =
                    "Great choice! Tell us about the furniture you'd like us to create.";
            } else if (serviceSelect.value === "cabinetry") {
                serviceMessage.textContent =
                    "Tell us about the cabinets you need.";
            } else if (serviceSelect.value === "repairs") {
                serviceMessage.textContent =
                    "Describe the wood repairs you need.";
            } else if (serviceSelect.value === "shelving") {
                serviceMessage.textContent =
                    "Tell us about your shelving project.";
            } else if (serviceSelect.value === "doors") {
                serviceMessage.textContent =
                    "Describe the door or frame work required.";
            } else if (serviceSelect.value === "refinishing") {
                serviceMessage.textContent =
                    "Tell us about the wood you would like refinished.";
            } else {
                serviceMessage.textContent = "";
            }
        });
    }

    // Enquiry page: AJAX form submission
    const form = document.querySelector("#enquiry-form");
    const message = document.querySelector("#form-message");

    if (form && message) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            submitForm(
                form,
                message,
                "Thank you! Your enquiry has been submitted successfully."
            );
        });
    }

    // Contact page: AJAX form submission
    const contactForm = document.querySelector("#contact-form");
    const contactMessage = document.querySelector("#contact-form-message");

    if (contactForm && contactMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            submitForm(
                contactForm,
                contactMessage,
                "Thank you! Your message has been submitted successfully."
            );
        });
    }

    // Services page: search and filter
    const serviceSearch = document.querySelector("#service-search");
    const searchMessage = document.querySelector("#search-message");

    if (serviceSearch && searchMessage) {
        const serviceItems = document.querySelectorAll(
            ".services-accordion details"
        );

        serviceSearch.addEventListener("input", function () {
            const searchText = serviceSearch.value.toLowerCase().trim();
            let visibleCount = 0;

            serviceItems.forEach(function (item) {
                const serviceText = item.querySelector("summary")
                    .textContent.toLowerCase();

                if (serviceText.includes(searchText)) {
                    item.style.display = "";
                    visibleCount++;
                } else {
                    item.style.display = "none";
                }
            });

            if (visibleCount === 0) {
                searchMessage.textContent =
                    "No matching services found.";
            } else {
                searchMessage.textContent =
                    "Showing " + visibleCount + " service(s).";
            }
        });
    }

});
