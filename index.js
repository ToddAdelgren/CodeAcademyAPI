// SignInMgr handles functionality related to sign ins to the website.
var SignInMgr = /** @class */ (function () {
    function SignInMgr() {
        this.signIns = [
            { emailAddress: 'todd@example.com', password: 'todd' },
            { emailAddress: 'mike@example.com', password: 'mike' },
            { emailAddress: 'test@example.com', password: 'test' }
        ];
    }
    SignInMgr.prototype.showAll = function () {
        this.signIns.forEach(function (element) { return console.log(element); });
    };
    SignInMgr.prototype.signInIsValid = function (signIn) {
        var retValue = false;
        for (var i = 0; i < this.signIns.length; i++) {
            if (this.signIns[i].emailAddress === signIn.emailAddress) {
                if (this.signIns[i].password === signIn.password) {
                    retValue = true;
                }
            }
        }
        return retValue;
    };
    return SignInMgr;
}());
document.getElementById('sign-in').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('message').classList.add('d-none');
    var emailAddress = document.getElementById('email-address').value.trim();
    if (fieldIsValid(emailAddress, 'email-address')) {
        var password = document.getElementById('password').value.trim();
        if (fieldIsValid(password, 'password')) {
            var signIn = { emailAddress: emailAddress, password: password };
            if (signInMgr.signInIsValid(signIn)) {
                console.log('GO TO THE NEXT PAGE');
            }
            else {
                document.getElementById('message').classList.remove('d-none');
                document.getElementById('email-address').focus();
            }
        }
    }
});
document.getElementById('signin-help').addEventListener('click', function (e) {
    var signIns = document.getElementById('sign-ins');
    if (signIns.classList.contains('d-none')) {
        // Show the sign ins.
        signIns.classList.remove('d-none');
        e.target.innerText = 'Close Sign In Help';
    }
    else {
        // Hide the sign ins.
        signIns.classList.add('d-none');
        e.target.innerText = 'Sign In Help';
    }
});
function fieldIsValid(enteredValue, elementId) {
    if (enteredValue.length === 0) {
        // Data in the field is invalid.
        document.getElementById(elementId).classList.add('is-invalid');
        document.getElementById(elementId).focus();
        return false;
    }
    else {
        // Data in the field is valid.
        document.getElementById(elementId).classList.remove('is-invalid');
        return true;
    }
}
var signInMgr = new SignInMgr();
document.getElementById('email-address').focus();
