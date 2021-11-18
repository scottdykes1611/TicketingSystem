function login() {
    let error = false

    //check presence of email
    error = validate("email") || error

    //check presence of password
    error = validate("password") || error

    if (error === true) {
        alert("Invalid login details")
        return
    }

    window.location.href = "../Main/homepage.html";
}

function register() {
    let error = false

    //check presence of first name
    error = validate("firstName") || error

    //check presence of last ame
    error = validate("lastName") || error

    //check presence of department name
    error = validate("depName") || error

    //check presence of location
    error = validate("location") || error

    //check presence of email
    error = validate("email") || error

    //check presence of password
    error = validate("password") || error

    if (error === true) {
        alert("Data is invalid")
        return
    }

    window.location.href = "./login.html";
}

function validate(id) {
    //returns true if value is not present
    const element = document.getElementById(id)
    const value = element.value

    if (value === undefined || value === "") {
        element.classList.add("error")
        return true
    }
    else {
        element.classList.remove("error")
        return false
    }
}
