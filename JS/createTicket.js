//status enum
const ticketStatus = {
    OPEN: "Open",
    CLOSED: "Closed"
};

let error = false;

function createTicket() {
    error = false;

    const title = getValue("title");
    const notes = getValue("notes");

    if (error === true) {
        alert("Invalid ticket details");
        return;
    }

    const reference = Math.random().toString(16).substr(2, 8);

    const ticket = {
        reference,
        title,
        notes,
        status: ticketStatus.OPEN
    };

    console.log(ticket);

    window.location.href = "../BasicUser/viewTickets.html";
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
