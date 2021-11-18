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

