const students = document.querySelector('#students')

function addItem(){
    const ardey = document.createElement('li');
    ardey.textContent = "farxiyo";
    students.appendChild(ardey);
}

function removeItem(){
    if(students.lastChild){
        students.removeChild(students.lastChild)
    }else{
        alert("sorry its finished")
    }
}
