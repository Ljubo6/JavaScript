function solve() {
    let actionsRef = Array.from(document.querySelectorAll('section'));
    let openRef = actionsRef[1].children[1];
    let inProgressRef = actionsRef[2].children[1];
    let completeRef = actionsRef[3].children[1];


    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (e) => {
        
        e.preventDefault();

        let taskRef = document.getElementById('task');
        let descriptionRef = document.getElementById('description');
        let dateRef = document.getElementById('date');

        if (taskRef.value === '' || descriptionRef.value === '' || dateRef.value === '') {
            return;
        }



        let article = createElement('article');


        let startBtn = createElement('button', 'Start', 'green');
        
        let deleteBtn = createElement('button', 'Delete', 'red');
        deleteBtn.addEventListener('click', (e) => {
            deleteArticle(e);
        });
        let finishBtn = createElement('button', 'Finish', 'orange');
        finishBtn.addEventListener('click', () => {
            completeRef.appendChild(article);
            divFlex.remove();
            
        });



        let divFlex = createElement('div', undefined, 'flex');
        divFlex.appendChild(startBtn);
        divFlex.appendChild(deleteBtn);

        let h3 = createElement('h3', taskRef.value);
        let pOne = createElement('p', `Description: ${descriptionRef.value}`);
        let pTwo = createElement('p', `Due Date: ${dateRef.value}`);


        article.appendChild(h3);
        article.appendChild(pOne);
        article.appendChild(pTwo);
        article.appendChild(divFlex);

        openRef.appendChild(article);

        taskRef.value = '';
        descriptionRef.value = '';
        dateRef.value = '';

        startBtn.addEventListener('click', () => {
            startBtn.remove();
            divFlex.appendChild(finishBtn);
            inProgressRef.appendChild(article);
        });

    });
    function  deleteArticle(e){
        e.target.parentElement.parentElement.remove();
    }

    function createElement(type, content, className) {
        const result = document.createElement(type);
        if (content) {
            result.textContent = content;
        }

        if (className) {
            result.className = className;
        }
        return result;
    }
}