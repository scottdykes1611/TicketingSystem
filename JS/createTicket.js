function createTicket() {
    let error = false

    //check presence of title
    error = presence("title") || error

    //check presence of notes
    error = presence("notes") || error

    if (error === true) {
        alert("Invalid login details")
        return
    }

    window.location.href = "../BasicUser/viewTickets.html";
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
