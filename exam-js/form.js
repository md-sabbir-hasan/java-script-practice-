function formsub() {
let name= document.getElementById("name").value;
let contact= document.getElementById("contact").value;
let remarks= document.getElementById("remarks").value;
let sex= document.querySelector('input[name=gender]:checked');
let courses= document.querySelectorAll('input[name=courses]:checked');
let location= document.getElementById("location").value;


let coursev =[];
  for (let i=0; i<courses.length; i++){
        coursev.push(courses[i].value);
    }

    let output = 'Name : ' + name + '<br>'
    + 'Contact : ' + contact + '<br>'
    + 'Remarks : ' + remarks + '<br>'
    + 'Sex : ' + sex.value + '<br>'
    + 'Courses : ' + coursev + '<br>'
    + 'Location : ' + location ;
let newWindow = window.open('','_blank');
    newWindow.document.write(output);
    
}




