function logoff() {
    alert('Are you sure?');
}

function isAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user == null) {
            document.getElementById('login-block').style.display = 'block';
        } else {
            document.getElementById('login-block').style.display = 'none';
        }
    });
}

function login() {
    const email = document.getElementById('email').value;
    const passwd = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, passwd)
        .catch((error) => {
            alert(error.message);
            document.querySelector('#password').value = '';
            return false;
        });
    return true;
}