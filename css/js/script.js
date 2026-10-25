
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#enquiry-form");
    const message = document.querySelector("#form-message");

    if (form && message) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            message.textContent =
                "Your enquiry form is valid. Email submission has not been configured yet.";

        });

    }

});
