"use strict";

const NUMBER_OF_RECORDS_TO_SHOW = 50; // Number of records to show in chat scroll
let chatListener = false;

// Init or update chat
function updateChat(newReplica = '') {
    const currentTimeStamp = Date.now();
    const chatRef = firebase.database().ref('/Chat');

    // Add new replica
    if (newReplica !== '') {
        const newRecordKey = chatRef.push().key;
        chatRef.child(newRecordKey).update ({
            uid: currentUser.uid,
            name: currentUser.name,
            timeStamp: Date.now(),
            text: newReplica
        });
    }

    // Set listener as needed
    if (!chatListener) {
        chatRef.limitToLast(NUMBER_OF_RECORDS_TO_SHOW).on('value', (records) => {
            updateChatFeed(records);
        })
        chatListener = true;
    }
}

// Update chat feed
function updateChatFeed(records) {
    let recordBlocks = document.getElementsByClassName('chat_item_wrap');

    // remove existing records...

}