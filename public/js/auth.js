function logoff() {
    firebase.auth().signOut();
}

function isAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user == null) {
            document.getElementById('login-block').style.display = 'block';
        } else {
            document.getElementById('login-block').style.display = 'none';
            document.getElementById('reg-block').style.display = 'none';
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

function showReg() {
    document.querySelector('#reg-block').style.display = 'block';
    document.querySelector('#login-block').style.display = 'none';
}

function register() {
    const email = document.querySelector('#reg-email').value;
    const nickname = document.querySelector('#reg-nickname').value;
    const passwd = document.querySelector('#reg-password').value;
    const passwd2 = document.querySelector('#reg-password2').value;

    if (passwd !== passwd2) {
        alert ('Пароли не совпадают!');
        return false;
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, passwd)
            .then(()=>{
                let user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: nickname
                })
            })
            .catch((error)=> {
                alert(error.message);
                return false;
            });
    }
}