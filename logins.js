import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCwpgPpaJeLPyyZU33toVV3CMErFRgrjbk",
    authDomain: "lawlify-login.firebaseapp.com",
    databaseURL: "https://lawlify-login-default-rtdb.firebaseio.com",
    projectId: "lawlify-login",
    storageBucket: "lawlify-login.appspot.com",
    messagingSenderId: "856683616608",
    appId: "1:856683616608:web:4e08c0e327e62763e72605",
    measurementId: "G-7BW82XR0CQ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
document.getElementById("sign-btn").addEventListener('click', function(){
   document.getElementById("signup-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("signup-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was logged in Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


  document.getElementById("signup-btn").addEventListener('click', function(){

   const signupEmail= document.getElementById("signup-email").value;
   const signupPassword =document.getElementById("signup-password").value;

   createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("signup-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+signupEmail+" was signed up Successfully";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("signup-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});