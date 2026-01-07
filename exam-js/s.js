function she(){
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remarks = document.getElementById('remarks').value;
    let location = document.getElementById('location').value;

    let sex=document.querySelector('input[name=sex]:checked');
    let course = document.querySelectorAll('input[name=course]:checked');

    let courseValue= [];
    for (let i=0; i<course.length; i++){
        courseValue.push(course[i].value);
    }

    let output = 'Name : ' + name + '<br>'
    + 'Contact : ' + contact + '<br>'
    + 'Remarks : ' + remarks + '<br>'
    + 'Sex : ' + sex.value + '<br>'
    + 'Course : ' + courseValue + '<br>'
    + 'Location : ' + location ;

    let newWindow = window.open('','_blank');
    newWindow.document.write(output);
}
