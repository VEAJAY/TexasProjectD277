function compareEmails() {
    const email = document.getElementById('emailForm').value;
    const email2 = document.getElementById('emailConfirm').value;

    if(email === email2){
        alert('Thank you for signing up!');
        return true;
    } else {
        alert('Emails do not match. Please enter a valid email.');
        return false;
    }
}