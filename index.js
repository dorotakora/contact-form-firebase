var config = {
    apiKey: "AIzaSyA0225-Fr1pp1xMUM_LzVhDT5rNvcX3x34",
    authDomain: "contact-form-firebase-9c271.firebaseapp.com",
    databaseURL: "https://contact-form-firebase-9c271.firebaseio.com",
    projectId: "contact-form-firebase-9c271",
    storageBucket: "contact-form-firebase-9c271.appspot.com",
    messagingSenderId: "538006884949",
    appId: "1:538006884949:web:2864715cb95f9557"
};
firebase.initializeApp(config);

// Reference messages collection
let messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}



