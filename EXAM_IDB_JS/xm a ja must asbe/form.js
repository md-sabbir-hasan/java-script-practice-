function submitForm() {
    let uname = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remarks = document.getElementById('remarks').value;
    let gender = document.querySelector('input[name=gender]:checked').value;
    let course = document.querySelectorAll('input[name=course]:checked').value;
    let location = document.getElementById('location').value;

    let courseValue = [];
    for (let i = 0; i < course.length; i++) {
        courseValue.push(course[i].value);
    }

    let output = "name: " + uname + "<br/>"
        + "contact: " + contact + "<br/>"
        + "remarks: " + remarks + "<br/>"
        + "gender: " + gender + "<br/>"
        + "course: " + courseValue + "<br/>"
        + "location: " + location;

    let newWindow = window.open('', '_blank');
    newWindow.document.write(output);


    // document.getElementById('myForm');

}