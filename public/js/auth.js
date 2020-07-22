function logoff() {
    alert('Are you sure?');
}

function isAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user == null) {
            document.getElementById('login-block').style.display = 'block';
        }
    });
}