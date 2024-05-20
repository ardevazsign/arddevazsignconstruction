const navbar = document.querySelector('.header-holder .navbar');
const searchForm = document.querySelector('.header-holder .search-form');
const loginForm = document.querySelector('.header-holder .login-form');
const contactInfo = document.querySelector('.contact-info');
const signUpForm = document.querySelector('.header-holder .sign-up-form');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
};
document.querySelector('#info-btn').onclick = () =>{
     contactInfo.classList.add('active');
};
document.querySelector('#close-contact-info').onclick = () =>{
     contactInfo.classList.remove('active');
};
document.querySelector('#sign-up').onclick = () =>{
     loginForm.classList.remove('active');
     signUpForm.classList.toggle('active');
};
document.querySelector('#back-login').onclick = () =>{
    signUpForm.classList.remove('active');
    loginForm.classList.toggle('active');
    
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
     signUpForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },  
});

var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },  
});
var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },  
});

// send email from clients

function emailSend(){
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    var messageBody = "Name: " + userName +
    "<br/> Phone Number: " + phone +
    "<br/> Email Address: " + email +
    "<br/> Message: " + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "newojunior@gmail.com",
        Password : "F8CCA9B7A3528E7D09C05672D2B92328AC24",
        To : 'newojunior@gmail.com',
        From : "newojunior@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
        message => alert(message)
    );
}




// ---fire base config

// var firebaseConfig = {
//     apiKey: "AIzaSyDZUbUw8oluYZe8l6oZXIkKVcqk9FTSbHw",
//     authDomain: "ardevazsignconstruction.firebaseapp.com",
//     projectId: "ardevazsignconstruction",
//     storageBucket: "ardevazsignconstruction.appspot.com",
//     messagingSenderId: "655704730274",
//     appId: "1:655704730274:web:d6c96616e410cf50f385fb",
//     // measurementId: "G-Q8F7BG1J45"
// };


// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // initialize variables
// const auth = firebase.auth()
// const database = firebase.database()

// // set up our register function
// function register () {
//     // get all the input field
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
//     firtsname = document.getElementById('firstname').value
//     lastname = document.getElementById('lastname').value
//     favourite_song = document.getElementById('favourite_song').value
//     milk_before_cereal = document.getElementById('milk_before_cereal').value


//     // validation input field
//     if(validate_email(email) == false || validate_password(password) == false) {
//        alert('Email or Password is Unregister!')
//         return
//     }
//     if(validate_field(firstname) == false || validate_field(lastname) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
//         alert('One or More Extra Fields is Outta Line!')
//         return
//     } 

// // move on with Auth
// auth.createUserWithEmailAndPassword(email, password)
// .then(function() {
//     // Declare user variable
//     var user = auth.currentUser

//     //  Add this user to Firebase Database
//     var database_ref = database.ref()

//     // Create User Data
//     var user_data = {
//         email : email,
//         firstname : firstname,
//         lastname : lastname,
//         favourite_song : favourite_song,
//         milk_before_cereal : milk_before_cereal,
//         last_login : Date.now()
//     }
//     // Push to Firebase Database
//     database_ref.child('users/' + user.uid).set(user_data)



//     // Done
//     alert('User Created!')
// })
// .catch(function(error) {
//     // Firebase will use this to alert of its errors
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
// })

// }

// // Set up our login funcion
// function login () {
//     // Get all our input fields
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value

//     // validate Input fields
//     if(validate_email(email) == false || validate_password(password) == false) {
//         alert('Email or Password is outta Line!!')
//         return 
//         // Don't continue running the code
//     }

//     auth.signInWithEmailAndPassword(email, password)
//     .then(function() {
//         // Declare user variable
//         var user = auth.currentUser

//         // Add this user to firebase Database
//         var database_ref = database.ref()

//         // Current User data
//         var user_data = {
//             last_login : Date.now()
//         }

//         // Push to Firebase Database
//         database_ref.child('users/' + user.uid).update(user_data)

//         // Done
//         alert('User Logged In!')

//     })
//     .catch(function(error) {
//         // Firebase will use this to alert of its errors
//         var error_code = error.code
//         var error_message = error.message

//         alert(error_message)
//     })
// }


 
// // validation function

// function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email )== true) {
//         // Email is good
//         return true
//     } else {
//         // Email is not good
//         return false
//     }
// }

//  function validate_password(password) {
//     // Firebase only accepts lengths greater than 6
//     if (password < 6) {
//         return false
//     } else {
//         return true
//     }
//  }

//  function validate_field(field) {
//     if(field == null) {
//         return false
//     }
//     if(field.length <= 0) {
//         return false
//     } else {
//         return true
//     }
//  }


















/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZUbUw8oluYZe8l6oZXIkKVcqk9FTSbHw",
    authDomain: "ardevazsignconstruction.firebaseapp.com",
    projectId: "ardevazsignconstruction",
    storageBucket: "ardevazsignconstruction.appspot.com",
    messagingSenderId: "655704730274",
    appId: "1:655704730274:web:d6c96616e410cf50f385fb",
    measurementId: "G-Q8F7BG1J45"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */