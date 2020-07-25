let database = null; // database reference
let currentUser = null; // current user

function init() {
    auth().then(updateChat);
}