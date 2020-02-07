document.getElementById('sign-in').addEventListener('click', function(e){
    e.preventDefault();
    let emailAddress: string = (<HTMLInputElement>document.getElementById('email-address')).value;
})

document.getElementById('email-address').focus();
