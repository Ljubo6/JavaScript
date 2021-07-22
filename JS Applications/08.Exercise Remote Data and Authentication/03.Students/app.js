async function students() {
    let resultsTable = document.querySelector('#results>tbody');
    resultsTable.innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    Object.values(data).forEach(s => {
        let firstName = s.firstName;
        let lastName = s.lastName;
        let facultyNumber = s.facultyNumber;
        let grade = s.grade;


        let tr = document.createElement('tr');

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstName;

        let tdLastName = document.createElement('td');
        tdLastName.textContent = lastName;

        let tdFacultyNumber = document.createElement('td');
        tdFacultyNumber.textContent = facultyNumber;

        let tdGrade = document.createElement('td');
        tdGrade.textContent = grade;

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdFacultyNumber);
        tr.appendChild(tdGrade);

        resultsTable.appendChild(tr);
    })


}
students();

document.getElementById('submit').addEventListener('click',createStudent);

async function createStudent(e){
    e.preventDefault();
    const formElement = document.getElementById('form')
    const formData = new FormData(formElement);
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let facultyNumber = formData.get('facultyNumber');
        let grade = formData.get('grade');

        if (firstName === '' || lastName === '' || facultyNumber === '' || grade === '') {
            return alert('Fields cannot be empty');
        }

        let response = await fetch('http://localhost:3030/jsonstore/collections/students',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({firstName,lastName,facultyNumber,grade})
        });

        document.querySelector('[name="firstName"]').value = '';
        document.querySelector('[name="lastName"]').value = '';
        document.querySelector('[name="facultyNumber"]').value = '';
        document.querySelector('[name="grade"]').value = '';
        students();
        
}