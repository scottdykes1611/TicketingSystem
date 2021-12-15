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

const email = localStorage.getItem("email");

const userType = localStorage.getItem("userType");

const displayedTickets = data
    .filter((ticket) => {
        //check if the user is admin
        if (userType === "admin") {
            return true;
        }

        //check if the notification is relevant to the user
        const email = localStorage.getItem("email");
        return email === ticket.createdBy;
    })
    .map(({title, status, reference}) => {
        const statusClass = `ticketStatus ${status}`;
        const url = `viewTicket.html?reference=${reference}`;

        return (
            '<a class="item" href="' + url + '">' +
            '<div class="itemTitle">' + title + '</div>' +
            '<div class="' + statusClass + '">' + status + '</div>' +
            '</a>'
        );
    });

const element = document.getElementById("viewTickets");
element.innerHTML = displayedTickets.join("");

//if the user is a basic user, add a "create new ticket" button
if (userType === "basic") {
    const newTicketButton = (
        '<a class="link" href="./createTicket.html">Create new ticket</a>'
    );
    document.getElementById("newTicket").innerHTML = newTicketButton;
}
