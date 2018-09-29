var name = $('#name').val();
var email = $('#email').val();
var message = $('#message').val();

$.post(
    "./api/MailSender.php", {
        receiver: 'khalidwaleed875@gmail.com',
        subject: 'new custom menu quote',
        message: name + email + message,
        key: '12jk123jk12kj3bn4h',
        htmlmail: true
    },
    function(result) {
        result = JSON.parse(result);
        if (result.status) {
            alert('your quote request has been sent');
            window.location.href = './home.html';
        } else {
            alert('server is currently down for maintainance');
        }
    }
);