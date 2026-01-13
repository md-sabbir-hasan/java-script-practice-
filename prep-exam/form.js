function formSubmit() {
    let name = document.getElementById('name').value
    let contact = document.getElementById('contact').value
    let remarks = document.getElementById('remarks').value
    let location = document.getElementById('location').value

    let sex = document.querySelector('input[name="sex"]:checked')

    let courses = document.querySelectorAll('input[name="courses"]:checked')
    let courseValue = [];
    for(let i=0; i< courses.length; i++){
        courseValue.push(courses[i].value);

    }

    let output = 
    "Name = " + name + "<br>" +
    "Contact = " + contact + "<br>" +
    "Remarks = " + remarks + "<br>" +
    "Sex = " + sex.value + "<br>" +
    "Courses = " + courseValue + "<br>" +
    "Location = " + location;



    let newWindow = window.open('','_blank');
    newWindow.document.write(output);


    

}