function sendForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value; 
    let passwors = document.getElementById("password").value; 
    let dob = document.getElementById("dob").value; 
    let address = document.getElementById("adress").value; 
    let course = document.getElementById("course").value; 
    let gender = document.querySelector("input[type=radio]:cheacked").value;
    let hobby = document.querySelector("input[type=checkbox]:cheacked");

    let hobbyValue = [];
    for (let i = 0; i< hobby.length; i++){
        hobbyValue.push(hobby[i]).value;
    }

    if (name.length == 0) {
        document.getElementById("nameError").innerHTML = "name cant be enpty";
        document.getElementById("nameError").style.color = "red";
        return;
    }
    else if (name.length <= 3 || name.length >= 20 ){
        document.getElementById("nameError").innerHTML = "must be 3 to 20";
        document.getElementById("nameError").style.color = "red";
        return;
    }

}
