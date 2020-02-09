interface SignIn {
    emailAddress: string;
    password: string;
}

// SignInMgr handles functionality related to sign ins to the website.
class SignInMgr {
    signIns: SignIn[] = [
                            {emailAddress: 'todd@example.com', password: 'todd'},
                            {emailAddress: 'mike@example.com', password: 'mike'},
                            {emailAddress: 'test@example.com', password: 'test'}
                        ];
    constructor() {}
    showAll(): void {
        this.signIns.forEach(element => console.log(element));
    }
    signInIsValid(signIn: SignIn): boolean {
        let retValue: boolean = false;
        for (let i: number = 0; i < this.signIns.length; i++){
            if (this.signIns[i].emailAddress === signIn.emailAddress){
                if (this.signIns[i].password === signIn.password){
                    retValue = true;
                }
            }
        } 
        return retValue;
        
    }
}

document.getElementById('sign-in').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('message').classList.add('d-none');
    let emailAddress: string = (<HTMLInputElement>document.getElementById('email-address')).value.trim();
    if (fieldIsValid(emailAddress, 'email-address')){
        let password: string = (<HTMLInputElement>document.getElementById('password')).value.trim();
        if (fieldIsValid(password, 'password')){
            let signIn: SignIn = {emailAddress: emailAddress, password: password};
            if (signInMgr.signInIsValid(signIn)){
                console.log('GO TO THE NEXT PAGE');
            } else {
                document.getElementById('message').classList.remove('d-none');
                document.getElementById('email-address').focus();
            }
        }
    }
})

document.getElementById('signin-help').addEventListener('click', function(e){
    let signIns = document.getElementById('sign-ins');
    if (signIns.classList.contains('d-none')){
        // Show the sign ins.
        signIns.classList.remove('d-none');
        (<HTMLInputElement>e.target).innerText = 'Close Sign In Help';
    } else {
        // Hide the sign ins.
        signIns.classList.add('d-none');
        (<HTMLInputElement>e.target).innerText = 'Sign In Help';
    }
})

function fieldIsValid(enteredValue: string, elementId: string): boolean {
    if (enteredValue.length === 0){
        // Data in the field is invalid.
        document.getElementById(elementId).classList.add('is-invalid');
        document.getElementById(elementId).focus();
        return false;
    } else {
        // Data in the field is valid.
        document.getElementById(elementId).classList.remove('is-invalid');
        return true;
    }
}

let signInMgr = new SignInMgr();

document.getElementById('email-address').focus();

