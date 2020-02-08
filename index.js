document.getElementById('sign-in').addEventListener('click', function (e) {
    e.preventDefault();
    var emailAddress = document.getElementById('email-address').value;
    console.log(emailAddress);
});
document.getElementById('email-address').focus();
