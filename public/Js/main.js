// HTML id For Form-Validation //
const form = document.getElementById('form');
const username = document.getElementById('username');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// A Event Listining to Form Submit button //
form.addEventListener('submit' , (event) => {
    event.preventDefault() ;
    validation();
});

// Addinational Global Email Validation //
const isEmail = (emailVal) => {
    // checking @ symbol is not at index 0 of user value //
    var atSymbol = emailVal.indexOf('@') ;
    if (atSymbol < 1) return false ;
    // checking . symbol is not at last index of user value //
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false ;
    if (dot === emailVal.length - 1) return false ;
    return true ;
};

// main form validate callback function //
const validation = () => {
    // trimmed value of user input //
    let usernameVal = username.value.trim();
    let numberVal = number.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let confirmPasswordVal = confirmPassword.value.trim();

    // UserName Validation //
    if (usernameVal === "") {
        setErrMsg(username, 'UserName cannot be Empty');
    } else if (usernameVal.length <= 2) {
        setErrMsg(username, 'UserName Must Be 3 Char Long');
    } else {
        setSucessMsg(username);
    }

    // Email Validation //
    if (emailVal === "") {
        setErrMsg(email , 'Email Cannot Be Blank');
    }else if( !isEmail(emailVal) ) {
        setErrMsg(email , 'Email is not Valid');
    } else {
        setSucessMsg(email);
    }
    
    // Number Validation //
    if (numberVal === "") {
        setErrMsg(number , 'Number Section Cannot Be Empty');
    }else if (numberVal.length !== 10) {
        setErrMsg(number , 'Number Should be 10 DIGITS Long');
    }else {
        setSucessMsg(number);
    }
    
    // Password Validation //
    if (passwordVal === "") {
        setErrMsg(password , 'Password Cannot Be Blank');
    }else if (passwordVal < 8) {
        setErrMsg(password , 'Password Must be 8 long in minimum');
    }else {
        setSucessMsg(password);
    }
    
    // Confirm Password Validation //
    if (confirmPasswordVal === "") {
        setErrMsg(confirmPassword , 'Cannot be Blank');
    }else if (confirmPasswordVal !== passwordVal) {
        setErrMsg(confirmPassword , 'Password Did Not Match');
    }else {
        setSucessMsg(confirmPassword);
    }
}; 

// setErrMsg Function decleration //
function setErrMsg(input , errorMsg) {
    const formInput = input.parentElement ;
    const small = formInput.querySelector('small');
    const Input = formInput.querySelector('input');
    formInput.className = 'form-input error' ;
    small.className = 'errMsg smallError' ;
    Input.style.borderColor = "#D13438" ;
    small.style.color = "#D13438" ;
    small.innerText = errorMsg ;
}

// setSucessMsg Function decleration //
function setSucessMsg(Class) {
    const formInput = Class.parentElement ;
    const Input = formInput.querySelector('input');
    const small = formInput.querySelector('small');
    formInput.className = 'form-input sucess' ;
    Input.style.borderColor = "#00CC6A" ;
    small.className = 'errMsg smallSucess' ;
    small.innerText = "" ;
}