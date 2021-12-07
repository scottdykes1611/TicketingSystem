const basicUsers = [
    {
        email: "user@email.com",
        password: "password"
    },
    {
        email: "lochei001@dundee.ac.uk",
        password: "password"
    }
];

const adminUsers = [
    {
        email: "admin@email.com",
        password: "password"
    }
];

function login() {
    let error = false;

    const email = getValue("email");
    const password = getValue("password");

    if (error === true) {
        alert("Invalid login details");
        return;
    }

    const basicUserMatch = basicUsers.find((user) => user.email === email && user.password === password);
    if (basicUserMatch !== undefined) {
        //adding user's email to local storage
        localStorage.setItem("email", basicUserMatch.email);
        window.location.href = "../BasicUser/homepage.html";
        return;
    }

    const adminUserMatch = adminUsers.find((user) => user.email === email && user.password === password);
    if (adminUserMatch !== undefined) {
        //adding user's email to local storage
        localStorage.setItem("email", adminUserMatch.email);
        window.location.href = "../AdminUser/homepage.html";
        return;
    }

    alert("Username or password incorrect");
}

function register() {
    let error = false;

    const firstName = getValue("firstName");
    const lastName = getValue("lastName");
    const depName = getValue("depName");
    const location = getValue("location");
    const email = getValue("email");
    const password = getValue("password");

    if (error === true) {
        alert("Data is invalid");
        return;
    }

    window.location.href = "./login.html";
}

function requestReset() {
    let error = false;

    const email = getValue("email");

    if (error === true) {
        alert("Data is invalid");
        return;
    }

    alert("We have sent you an email with a link to change your password");
}

function resetPassword() {
    let error = false;

    const password = getValue("password");
    const confirmPassword = getValue("confirmPassword");

    //check passwords are the same
    if (password !== confirmPassword) {
        error = true;
    }

    if (error === true) {
        alert("Data is invalid");
        return;
    }

    window.location.href = "./login.html";
}

function getValue(id) {
    //gets the value from input and checks if value is present
    const element = document.getElementById(id);
    const value = element.value;

    if (value === undefined || value === "") {
        element.classList.add("error");
        error = true;
    } else {
        element.classList.remove("error");
    }

    return value;
}
