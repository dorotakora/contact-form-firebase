const config = {
    apiKey: "AIzaSyD2Ay1XOIDUQGQWolVVzTo1zEF0ukBU0SI",
    authDomain: "contact-form-8b683.firebaseapp.com",
    databaseURL: "https://contact-form-8b683.firebaseio.com",
    projectId: "contact-form-8b683",
    storageBucket: "contact-form-8b683.appspot.com",
    messagingSenderId: "993390721195",
    appId: "1:993390721195:web:93eabd0f689c266d"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
    e.preventDefault();
    // Get value
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    // Save message
    saveMessage(name,company,email,phone,message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide after 3 second
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear input fields
    document.getElementById('contact-form').reset();
}

// function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company,email,phone,message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}



