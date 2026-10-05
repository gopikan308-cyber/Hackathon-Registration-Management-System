const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const registerNumber = document.getElementById("registerNumber").value.trim();
    const department = document.getElementById("department").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const year = document.getElementById("year").value;
    const selectedEvent = document.getElementById("eventSelection").value;

    document.querySelectorAll("small").forEach(function(error) {
        error.textContent = "";
    });

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your name.";
        valid = false;
    }

    if (registerNumber === "") {
        document.getElementById("registerError").textContent =
            "Please enter your register number.";
        valid = false;
    }

    if (department === "") {
        document.getElementById("departmentError").textContent =
            "Please enter your department.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email.";
        valid = false;
    }

    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").textContent =
            "Please enter a valid 10-digit mobile number.";
        valid = false;
    }

    if (year === "") {
        document.getElementById("yearError").textContent =
            "Please select your year.";
        valid = false;
    }

    if (selectedEvent === "") {
        document.getElementById("eventError").textContent =
            "Please select an event.";
        valid = false;
    }

    if (valid) {

        const registrationData = {
            name,
            registerNumber,
            department,
            email,
            mobile,
            year,
            event: selectedEvent
        };

        localStorage.setItem(
            "hackathonRegistration",
            JSON.stringify(registrationData)
        );

        document.getElementById("successMessage").style.display = "block";

        form.reset();
    }
});