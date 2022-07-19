function validationForm(){
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phone = document.forms["RegForm"]["Telephone"];
    let select = document.forms["RegForm"]["Subject"];
  let pass = document.forms["RegForm"]["Password"];
    nameRegex = /^[A-Za-z]+$/
    // let nameErr = document.forms["RegForm"]["NameErr"];

    if(username.value == "" || !nameRegex.test(username.value)){
        alert("Please enter your name.");
        username.style.border = "2px solid red";
        // username.innerHTML = "Please enter your name.";
        return false;
    }
    else{
        username.style.border = "2px solid green";
    }
    if(email.value == ""){
        alert("Please enter your Email");
        email.style.border = "2px solid red";
        return false;
    }
    else{
        email.style.border = "2px solid green";
    }
    if(email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0){
        alert("Pleaase enter a valid Email Address");
        return false;
    }
    if(pass.value == "" || pass.value.length != 18){
        alert("Please enter your password");
        pass.style.border = "2px solid red";
        return false;
    }
    else{
        pass.style.border = "2px solid green";
    }
    if(phone.value == "" || phone.value.length != 10){
        alert("Please enter your Telephone number.");
        phone.style.border = "2px solid red";
        return false;
    }else{
        phone.style.border = "2px solid green";
    }
    if(select.value == ""){
        alert("Please select a book");
        select.style.border = "2px solid red";
        return false;
    }
    else{
        select.style.border = "2px solid green";
    }

}