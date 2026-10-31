document.addEventListener("DOMContentLoaded", function () {

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

    // Enquiry page: personalised confirmation message
    // Enquiry page: email submission
const form = document.querySelector("#enquiry-form");
const message = document.querySelector("#form-message");

if (form && message) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const service = serviceSelect.options[serviceSelect.selectedIndex].text;
        const budgetSelect = document.querySelector("#budget");
        const budget = budgetSelect.options[budgetSelect.selectedIndex].text;

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#phone").value;
        const description = document.querySelector("#message").value;

        const subject = encodeURIComponent("TimberCraft Carpentry Enquiry");

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nService: " + service +
            "\nBudget: " + budget +
            "\nProject Description: " + description
        );

        message.textContent =
            "Your enquiry is ready. Your email application will open so you can send it.";

        window.location.href =
            "mailto:hello@timbercraft.co.za?subject=" + subject + "&body=" + body;
    });
}

    // Contact page: form validation feedback
    const contactForm = document.querySelector("#contact-form");
    const contactMessage = document.querySelector("#contact-form-message");

    if (contactForm && contactMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            contactMessage.textContent =
                "Thank you for contacting TimberCraft Carpentry. Your message is valid. Email submission has not been configured yet.";
        });
    }

});
