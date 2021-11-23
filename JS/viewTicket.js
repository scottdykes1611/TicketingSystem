//status enum
const ticketStatus = {
    OPEN: "Open",
    CLOSED: "Closed"
}

let data = [
    {
        reference: "j47dsne",
        title: "Computer is broken",
        notes: ["Placeholder text to describe problem with computer"],
        status: ticketStatus.OPEN
    },
    {
        reference: "9kalen3",
        title: "Computer is broken",
        notes: ["Placeholder text to describe problem with computer"],
        status: ticketStatus.OPEN
    },
    {
        reference: "nb829q",
        title: "Computer is broken",
        notes: ["Placeholder text to describe problem with computer"],
        status: ticketStatus.CLOSED
    },
]

//getting the reference parameter from page url
const urlParams = window.location.search;
const {groups: {reference}} = /\?reference=(?<reference>.*)/.exec(urlParams)

function getTicket(reference) {
    //this function will be replaced with a fetch from the database
    return data.find((ticket) => ticket.reference === reference)
}

function toggleStatus(status) {
    //this function will be replaced with an update to the database
    const ticketToUpdate = data.find((ticket) => ticket.reference === reference)

    ticketToUpdate.status = ticketToUpdate.status === ticketStatus.OPEN ? ticketStatus.CLOSED : ticketStatus.OPEN

    data = [...data.filter((ticket) => ticket.reference !== reference), ticketToUpdate]

    displayTicket()
}

function displayTicket() {
    const ticket = getTicket(reference)

    const {title, notes, status} = ticket

    const statusClass = `ticketStatus ${status}`
    const displayedNotes = notes.map((note) => ('<p>' + note + '</p>')).join("<br>")

    const displayedTickets = (
        '<h2>' + title + '</h2>' +
        displayedNotes +
        '<div class="statusWrapper">' +
        '<div class="' + statusClass + '">' + status + '</div>' +
        '<button onclick="toggleStatus(status)">' + (status === ticketStatus.OPEN ? "Close ticket" : "Open ticket") + '</button>' +
        '</div>'

    )

    const element = document.getElementById("viewTicket")
    element.innerHTML = displayedTickets
}

displayTicket()
