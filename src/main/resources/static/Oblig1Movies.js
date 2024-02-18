document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let movie = document.getElementById('movie').value;
    let ticketAmount = document.getElementById('ticketAmount').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let ticketInfo = {
        movie: movie,
        ticketAmount: ticketAmount,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };

    let ticketList = document.getElementById('allTickets');
    let listItem = document.createElement('li');

    listItem.innerHTML = "<b>Movie:</b> " + ticketInfo.movie + "<br>" +
        "<b>Ticket Amount:</b> " + ticketInfo.ticketAmount + "<br>" +
        "<b>First Name:</b> " + ticketInfo.firstName + "<br>" +
        "<b>Last Name:</b> " + ticketInfo.lastName + "<br>" +
        "<b>Phone:</b> " + ticketInfo.phone + "<br>" +
        "<b>email:</b> " + ticketInfo.email;
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
