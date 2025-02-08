const firebaseConfig = {
  apiKey: "AIzaSyB3yVQ6VHV0THdoghvR8QYKOPGLWzwfd94",
  authDomain: "contactform-349f8.firebaseapp.com",
  databaseURL: "https://contactform-349f8-default-rtdb.firebaseio.com",
  projectId: "contactform-349f8",
  storageBucket: "contactform-349f8.appspot.com",
  messagingSenderId: "179413116059",
  appId: "1:179413116059:web:e00f34512fa5763f0e923e",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
