function formSub() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let remarks = document.getElementById("remarks").value;
    let location = document.getElementById("location").value;
    let sex = document.querySelector('input[name="sex"]:checked');
    let courses = document.querySelectorAll('input[name="courses"]:checked');

    let courseValue =[];
    for (let i=0; i <courses.length; i++) {
        courseValue.push(courses[i].value);
    }

    let output = "name= " + name + "<br>" +
    "contact= " + contact + "<br>" +
    "remarks= " + remarks + "<br>" +
    "location= " + location + "<br>" +
    "sex= " + sex.value + "<br>" +
    "courses= " + courseValue + "<br>" ;

    let newWindow =  window.open('','_blank');
    newWindow.document.write(output);
}