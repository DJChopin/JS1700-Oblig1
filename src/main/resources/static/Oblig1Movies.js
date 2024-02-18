document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let movie = document.getElementById('movie').value;
    let ticketAmount = document.getElementById('ticketAmount').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (!movie || !ticketAmount || !firstName || !lastName || !phone || !email) {
        alert('Please fill in all fields.');
        return;
    }

    let ticketInfo = [movie, ticketAmount, firstName, lastName, phone, email];

    let ticketList = document.getElementById('allTickets');
    let listItem = document.createElement('li');

    listItem.innerHTML = "<b>Movie:</b> " + ticketInfo[0] + "<br>" +
        "<b>Ticket Amount:</b> " + ticketInfo[1] + "<br>" +
        "<b>First Name:</b> " + ticketInfo[2] + "<br>" +
        "<b>Last Name:</b> " + ticketInfo[3] + "<br>" +
        "<b>Phone:</b> " + ticketInfo[4] + "<br>" +
        "<b>email:</b> " + ticketInfo[5];
    ticketList.appendChild(listItem);

    document.getElementById('movie').value = "";
    document.getElementById('ticketAmount').value = "";
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "";
});

document.getElementById('emptyTickets').addEventListener('click', function() {
    document.getElementById('allTickets').innerHTML = '';
});
