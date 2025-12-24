function sendForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let dob = document.getElementById("dob").value; 
    let address = document.getElementById("address").value;  
    let gender = document.querySelector("input[name=gender]:checked");
    let hobby = document.querySelectorAll("input[name=hobby]:checked");

    let hobbyValue = [];
    for (let i = 0; i< hobby.length; i++){
        hobbyValue.push(hobby[i].value);
    }

    // if (name.length == 0) {
    //     document.getElementById("nameError").innerHTML = "name cant be enpty";
    //     document.getElementById("nameError").style.color = "red";
    //     return;
    // }
    // else if (name.length <= 3 || name.length >= 20 ){
    //     document.getElementById("nameError").innerHTML = "must be 3 to 20";
    //     document.getElementById("nameError").style.color = "red";
    //     return;
    // }

    let output = "Name " + name + "<br>"
   + "Password " + password + "<br>"
   + "Date of Birth " + dob + "<br>"
   + "Email " + email + "<br>"
   + "Gender " + gender.value + "<br>"
   + "Address " + address + "<br>"
   + "Hobby " + hobbyValue ;


    let newWindow = window.open("", "_blank");
    newWindow.document.write("<pre>" +  output + "</pre>");

}

// let myForm = document.getElementById(myForm);
// myForm.addEventListener("submit", submitForm);
