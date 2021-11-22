function login() {
    let error = false

    //check presence of email
    error = presence("email") || error

    //check presence of password
    error = presence("password") || error

    if (error === true) {
        alert("Invalid login details")
        return
    }

    window.location.href = "../Main/homepage.html";
}

function register() {
    let error = false

    //check presence of first name
    error = presence("firstName") || error

    //check presence of last ame
    error = presence("lastName") || error

    //check presence of department name
    error = presence("depName") || error

    //check presence of location
    error = presence("location") || error

    //check presence of email
    error = presence("email") || error

    //check presence of password
    error = presence("password") || error

    if (error === true) {
        alert("Data is invalid")
        return
    }

    window.location.href = "./login.html";
}

function requestReset() {
    let error = false

    //check presence of email
    error = presence("email") || error

    if (error === true) {
        alert("Data is invalid")
        return
    }

    alert("We have sent you an email with a link to change your password")
}

function resetPassword() {
    let error = false

    //check presence of password
    error = presence("password") || error

    //check presence of confirm password
    error = presence("confirmPassword") || error

    //check passwords are the same
    error = matching("password", "confirmPassword") || error

    if (error === true) {
        alert("Data is invalid")
        return
    }

    window.location.href = "./login.html";
}

function presence(id) {
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

function matching(id1, id2) {
    //returns true if values do not match
    const element1 = document.getElementById(id1)
    const element2 = document.getElementById(id2)

    const value1 = element1.value
    const value2 = element2.value

    if (value1 !== value2) {
        element1.classList.add("error")
        element2.classList.add("error")
        return true
    }
    else {
        element1.classList.remove("error")
        element2.classList.remove("error")
        return false
    }
}

