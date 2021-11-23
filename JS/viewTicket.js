//status enum
const ticketStatus = {
    OPEN: "Open",
    CLOSED: "Closed"
}

let data = [
    {
        reference: "j47dsne",
        title: "Computer is broken 1",
        notes: ["Placeholder text to describe problem with computer"],
        status: ticketStatus.OPEN
    },
    {
        reference: "9kalen3",
        title: "Computer is broken 2",
        notes: ["Placeholder text to describe problem with computer"],
        status: ticketStatus.OPEN
    },
    {
        reference: "nb829q",
        title: "Computer is broken 3",
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

function addNote() {
    //this function will be replaced with an update to the database
    const ticketToUpdate = data.find((ticket) => ticket.reference === reference)

    const note = document.getElementById("notes").value

    ticketToUpdate.notes = [...ticketToUpdate.notes, note]
    data = [...data.filter((ticket) => ticket.reference !== reference), ticketToUpdate]

    displayTicket()
}

function displayTicket() {
    const ticket = getTicket(reference)

    const {title, notes, status} = ticket

    const statusClass = `ticketStatus ${status}`
    const displayedNotes = notes.map((note) => ('<p>' + note + '</p>')).join("")

    const addNote = status === ticketStatus.OPEN ? (
        '<form onsubmit="event.preventDefault();">' +
            '<div class="formElement">' +
                '<label for="notes" class="formLabel">Add new note:</label><br>' +
                '<textarea id="notes" name="notes" class="formInput" rows="4"></textarea><br>' +
            '</div>' +
            '<button type="submit" class="submit" onClick="addNote()">Submit</button>' +
        '</form>'
    ) : ""

    const displayedTicket = (
        '<h2>' + title + '</h2>' +
        displayedNotes +
        '<div class="statusWrapper">' +
            '<div class="' + statusClass + '">' + status + '</div>' +
            '<button onclick="toggleStatus(status)">' + (status === ticketStatus.OPEN ? "Close ticket" : "Open ticket") + '</button>' +
        '</div>' +
        addNote
    )

    const element = document.getElementById("viewTicket")
    element.innerHTML = displayedTicket
}

displayTicket()
