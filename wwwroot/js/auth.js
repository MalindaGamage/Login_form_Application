const baseUrl = "http://localhost:5177/api/user";

async function submitRegister(event) {
    event.preventDefault();
    const fullName = document.getElementById("registerFullName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
    });

    const message = document.getElementById("registerMessage");
    if (response.ok) {
        message.innerHTML = `<span class="text-success">Registration successful!</span>`;
    } else {
        const result = await response.json();
        message.innerHTML = `<span class="text-danger">${result.message || "Registration failed."}</span>`;
    }
}

async function submitLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const message = document.getElementById("loginMessage");
    if (response.ok) {
        const result = await response.json();
        message.innerHTML = `<span class="text-success">Login successful! Token: ${result.token}</span>`;
        // Store token in local storage or cookies for further use
        localStorage.setItem("authToken", result.token);
    } else {
        const result = await response.json();
        message.innerHTML = `<span class="text-danger">${result.message || "Login failed."}</span>`;
    }
}
