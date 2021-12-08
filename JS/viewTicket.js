//status enum
const ticketStatus = {
    OPEN: "Open",
    CLOSED: "Closed"
};

//this will be replaced with data fetched from database
let data = [
    {
        reference: "j47dsne",
        title: "Keyboard not working",
        notes: [
            {
                message: "Some of the keys do not work",
                read: true,
                user: "lochei001@email.com",
            },
            {
                message: "More of the keys have stopped working",
                read: false,
                user: "lochei001@email.com",
            }
        ],
        status: ticketStatus.OPEN,
        created: new Date(),
        createdBy: "lochei001@dundee.ac.uk"
    },
    {
        reference: "9kalen3",
        title: "Cannot use the mouse",
        notes: [
            {
                message: "The mouse for the computer does not work",
                read: true,
                user: "user@email.com",
            }
        ],
        status: ticketStatus.OPEN,
        created: new Date(),
        createdBy: "user@email.com"
    },
    {
        reference: "nb829q",
        title: "Cannot use software",
        notes: [
            {
                message: "Some of the software doesn't work",
                read: true,
                user: "user@email.com",
            },
            {
                message: "The problem has been fixed",
                read: true,
                user: "admin@email.com",
            }
        ],
        status: ticketStatus.CLOSED,
        created: new Date(),
        createdBy: "user@email.com"
    },
];

//getting the reference parameter from page url
const urlParams = window.location.search;
const {groups: {reference}} = /\?reference=(?<reference>.*)/.exec(urlParams);

function getTicket(reference) {
    //this function will be replaced with a fetch from the database
    return data.find((ticket) => {
        //filter out if the reference does not match
        if (ticket.reference !== reference) {
            return false
        }

        //pass the filter if it was created by the current user
        const email = localStorage.getItem("email")
        if (ticket.createdBy === email) {
            return true
        }

        //pass the filter if the current user is an admin
        const userType = localStorage.getItem("userType")
        return userType === "admin"
    });
}

function toggleStatus(status) {
    //this function will be replaced with an update to the database
    const ticketToUpdate = data.find((ticket) => ticket.reference === reference);

    ticketToUpdate.status = ticketToUpdate.status === ticketStatus.OPEN ? ticketStatus.CLOSED : ticketStatus.OPEN;
    data = [...data.filter((ticket) => ticket.reference !== reference), ticketToUpdate];

    displayTicket();
}

function addNote() {
    //this function will be replaced with an update to the database
    const ticketToUpdate = data.find((ticket) => ticket.reference === reference);

    const email = localStorage.getItem("email");

    const note = {
        message: document.getElementById("notes").value,
        read: false,
        user: email
    };

    ticketToUpdate.notes = [...ticketToUpdate.notes, note];
    data = [...data.filter((ticket) => ticket.reference !== reference), ticketToUpdate];

    displayTicket();
}

function displayTicket() {
    const ticket = getTicket(reference);

    if (ticket === undefined) {
        return "404 Ticket not found"
    }

    const {title, notes, status} = ticket;

    const statusClass = `ticketStatus ${status}`;
    const displayedNotes = notes.map((note) => {
        const read = note.read ? "Read by admin" : "Not read by admin";

        return (
            '<h3>' +
            note.user +
            '</h3>' +
            '<p>' +
            note.message +
            " " +
            "<i>" +
            read +
            "</i>" +
            '</p>'
        );
    }).join("");

    const addNote = status === ticketStatus.OPEN ? (
        '<form onsubmit="event.preventDefault();">' +
        '<div class="formElement">' +
        '<label for="notes" class="formLabel">Add new note:</label><br>' +
        '<textarea id="notes" name="notes" class="formInput" rows="4"></textarea><br>' +
        '</div>' +
        '<button type="submit" class="submit" onClick="addNote()">Submit</button>' +
        '</form>'
    ) : "";

    const displayedTicket = (
        '<h2>' + title + '</h2>' +
        displayedNotes +
        '<div class="statusWrapper">' +
        '<div class="' + statusClass + '">' + status + '</div>' +
        '<button onclick="toggleStatus(status)">' + (status === ticketStatus.OPEN ? "Close ticket" : "Open ticket") + '</button>' +
        '</div>' +
        addNote
    );

    const element = document.getElementById("viewTicket");
    element.innerHTML = displayedTicket;
}

displayTicket();
