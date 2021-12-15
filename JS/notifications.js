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
        status: notificationStatus.NOTE_ADDED,
        relevantUser: "lochei001@dundee.ac.uk"
    },
    {
        ticketReference: "9kalen3",
        status: notificationStatus.TICKET_OPENED,
        relevantUser: "user@email.com"
    },
];

const displayedNotifications = data
    .filter((notification) => {
        //check if the user is admin
        const userType = localStorage.getItem("userType");
        if (userType === "admin") {
            return true;
        }

        //check if the notification is relevant to the user
        const email = localStorage.getItem("email");
        return email === notification.relevantUser;
    })
    .map(({ticketReference, status}) => {
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

