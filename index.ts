document.getElementById('sign-in').addEventListener('click', function(e){
    e.preventDefault();
    let emailAddress: string = (<HTMLInputElement>document.getElementById('email-address')).value;
    console.log(emailAddress);
})

document.getElementById('email-address').focus();
