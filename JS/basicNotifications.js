//ticket status enum
const notificationStatus = {
    TICKET_CLOSED: "TicketClosed",
    TICKET_OPENED: "TicketOpened",
    NOTE_ADDED: "NoteAdded"
};

//this will be replaced with data fetched from database
const data = [
    {
        ticketReference: "j47dsne",
        status: notificationStatus.NOTE_ADDED
    },
];

const displayedNotifications = data.map(({ticketReference, status}) => {
    const getTitle = () => {
        switch (status) {
            case notificationStatus.TICKET_CLOSED:
                return "Ticket closed";
            case notificationStatus.TICKET_OPENED:
                return "Ticket opened";
            case notificationStatus.NOTE_ADDED:
                return "Note added";
        }
    };

    const url = `viewTicket.html?reference=${ticketReference}`;
    const title = getTitle();

    return (
        '<a class="item notification" href="' + url + '">' +
        '<div class="itemTitle">' + title + '</div>' +
        '</a>'
    );
});

const element = document.getElementById("viewNotifications");
element.innerHTML = displayedNotifications.join("");

