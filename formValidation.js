function validationForm(){
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phone = document.forms["RegForm"]["Telephone"];
    // let nameErr = document.forms["RegForm"]["NameErr"];

    if(username.value == ""){
        alert("Please enter your name.");
        username.style.border = "2px solid red";
        // username.innerHTML = "Please enter your name.";
        username.focus();
        return false;
    }
    else{
        username.style.border = "2px solid green";
        username.focus();
    }
    if(email.value == ""){
        alert("Please enter your Email");
        email.style.border = "2px solid red";
        email.focus();
        return false;
    }
    else{
        email.style.border = "2px solid green";
        email.focus();
    }
    if(email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0){
        alert("Pleaase enter a valid Email Address");
        email.focus();
        return false;
    }
    // if(password.value == "" || password.value.length != 18){
    //     alert("Please enter your password");
    //     password.style.border = "2px solid red";
    //     password.focus();
    //     return false;
    // }
    // else{
    //     password.style.border = "2px solid green";
    //     password.focus();
    // }
    if(phone.value == "" || phone.value.length != 10){
        alert("Please enter your Telephone number.");
        phone.focus();
        return false;
    }
    if(selectBook.value == ""){
        alert("Please select a book");
        selectBook.style.border = "2px solid red";
        selectBook.focus();
        return false;
    }
    else{
        selectBook.style.border = "2px solid green";
        selectBook.focus();
    }

}