function id(id) {
    return document.getElementById(id);
}

const usernameInput = id("username");
const passwordInput = id("password");

function loginUser() {

    const username = usernameInput.value;
    const password = passwordInput.value;

    if( username.length === 0 ) {
        alert("Please enter username!");
        usernameInput.focus();

    } 
    else if( password.length === 0  ) {
        alert("Please enter password!");
        passwordInput.focus();
    }
    else if( password.length < 8 ) {
        alert("Passwor is too short!");
        passwordInput.focus();
    }
    else {
        usernameInput.value = "";
        passwordInput.value = "";
        alert("Login successful!")
    }

    return false;
}
