
const input = "Pankaj";
const inputPassword = '123456';
function validation() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (user == input && pass === inputPassword) {
        alert('Login Success');
    } else {
        alert('Login Faild');
    }
}
