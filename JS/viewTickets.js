//status enum
const ticketStatus = {
    OPEN: "Open",
    CLOSED: "Closed"
}

//this will be replaced with data fetched from database
const data = [
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

const displayedTickets = data.map(({title, status, reference}) => {
    const statusClass = `ticketStatus ${status}`
    const url = `viewTicket.html?reference=${reference}`

    return (
        '<a class="ticket" href="' + url + '">' +
            '<div class="ticketTitle">' + title + '</div>' +
            '<div class="' + statusClass + '">' + status + '</div>' +
        '</a>'
    )
})

const element = document.getElementById("viewTickets")
element.innerHTML = displayedTickets.join("")
