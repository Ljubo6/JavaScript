function solve() {
    let addRef = document.getElementById('add').addEventListener('click', getInput);


    let sections = Array.from(document.querySelectorAll('section'));

    let openSection = sections[1];
    let openDiv = openSection.children[1];

    let inProgressSection = sections[2];
    let divInProgress = inProgressSection.children[1];

    let completeSection = sections[3];
    let divComplete = completeSection.children[1];

    function getInput(e) {

        let taskRef = document.getElementById('task');
        let descriptionRef = document.getElementById('description');
        let dateRef = document.getElementById('date');

        e.preventDefault();


        let task = taskRef.value;
        let description = descriptionRef.value;
        let date = dateRef.value;

        if (!taskRef.value || !descriptionRef.value || !dateRef.value) {
            return;
        }

        let articleElement = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = task;
        articleElement.appendChild(h3Element);
        taskRef.value = '';

        let pDescrElement = document.createElement('p');
        pDescrElement.textContent = `Description: ${description}`;
        articleElement.appendChild(pDescrElement);
        descriptionRef.value = '';

        let pDateElement = document.createElement('p');
        pDateElement.textContent = `Due Date: ${date}`;
        articleElement.appendChild(pDateElement);
        dateRef.value = '';




        let divBtn = document.createElement('div');
        divBtn.setAttribute('class', 'flex');


        let startBtn = document.createElement('button');
        startBtn.setAttribute('class', 'green');
        startBtn.textContent = 'Start';
        divBtn.appendChild(startBtn);
        startBtn.addEventListener('click', taskInProgress);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'red');
        deleteBtn.textContent = 'Delete';
        divBtn.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            openDiv.removeChild(articleElement);
        });

        articleElement.appendChild(divBtn);

        openDiv.appendChild(articleElement);
        openSection.appendChild(openDiv);

        function taskInProgress(ev) {

            let articleInProgress = document.createElement('article');

            let h3InProgress = document.createElement('h3');
            h3InProgress.textContent = h3Element.innerHTML;
            articleInProgress.appendChild(h3InProgress);

            let pDescrInProgress = document.createElement('p');
            pDescrInProgress.textContent = `${pDescrElement.innerHTML}`;
            articleInProgress.appendChild(pDescrInProgress);

            let pDateInProgress = document.createElement('p');
            pDateInProgress.textContent = `${pDateElement.innerHTML}`;
            articleInProgress.appendChild(pDateInProgress);




            let divBtn = document.createElement('div');
            divBtn.setAttribute('class', 'flex');


            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'red');
            deleteBtn.textContent = 'Delete';
            divBtn.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => {
                divInProgress.removeChild(articleInProgress);
            });

            let finishBtn = document.createElement('button');
            finishBtn.setAttribute('class', 'orange');
            finishBtn.textContent = 'Finish';
            divBtn.appendChild(finishBtn);
            finishBtn.addEventListener('click', completeTask);

            articleInProgress.appendChild(divBtn);
            divInProgress.appendChild(articleInProgress);
            inProgressSection.appendChild(divInProgress);

            openDiv.removeChild(articleElement);

            function completeTask(ev) {
                let articleComplete = document.createElement('article');

                let h3Complete = document.createElement('h3');
                h3Complete.textContent = h3Element.innerHTML;
                articleComplete.appendChild(h3Complete);
    
                let pDescrComplete = document.createElement('p');
                pDescrComplete.textContent = `${pDescrElement.innerHTML}`;
                articleComplete.appendChild(pDescrComplete);
    
                let pDateComplete = document.createElement('p');
                pDateComplete.textContent = `${pDateElement.innerHTML}`;
                articleComplete.appendChild(pDateInProgress);
    
                divComplete.appendChild(articleComplete);
                completeSection.appendChild(divComplete);
    
                divInProgress.removeChild(articleInProgress);
            }

        }
    }


    return getInput;
}