document.getElementById('sign-in').addEventListener('click', function(e){

    e.preventDefault();

    let emailAddress: string = (<HTMLInputElement>document.getElementById('email-address')).value.trim();

    if (fieldIsValid(emailAddress, 'email-address')){

        let password: string = (<HTMLInputElement>document.getElementById('password')).value.trim();

        if (fieldIsValid(password, 'password')){

            console.log('THE FIELDS ARE VALID');
        }
    }
})

document.getElementById('email-address').focus();

function fieldIsValid(enteredValue: string, elementId: string): boolean {

    if (enteredValue.length === 0){

        document.getElementById(elementId).classList.add('is-invalid');
        document.getElementById(elementId).focus();
        return false;

    } else {

        document.getElementById(elementId).classList.remove('is-invalid');
        return true;
    }
}