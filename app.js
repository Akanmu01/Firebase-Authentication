//authenticate registration with firebase
var data = {
  email: $('#registerEmail').val(), //get the email from Form
  password : $('#registerPassword').val() //get the pass from Form
};
firebase
  .auth()
  .createUserWithEmailAndPassword(data.email, data.password)
  .then( function(user){
    console.log("Successfully created user account with uid:", user.uid);
  })
  .catch(function(error){
    console.log("Error creating user:", error);
  });

//authenticate firebase with login
  vatr data = {
  email    : $('#loginEmail').val(),
  password : $('#loginPassword').val()
};
var auth = null;
firebase
  .auth()
  .signInWithEmailAndPassword(data.email, data.password)
  .then( function(user){
    console.log("Authenticated successfully with payload:", user);
    auth = user;
  })
  .catch(function(error){
    console.log("Login Failed!", error);
  });