async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();
    return data;
};
function bookLibrary() {
    document.getElementById('loadBooks').addEventListener('click', getBooks);

    document.getElementById('createForm').addEventListener('submit', createBook);

    let editForm = document.getElementById('editForm');
    editForm.style.display = 'none';

    let table = document.querySelector('table');
    table.addEventListener('click', editOrDeleteRow);

    document.getElementById('editForm').addEventListener('submit', updateBook);
};
bookLibrary();

async function getBooks() {
    let tableBody = document.querySelector('tbody');
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    tableBody.innerHTML = '';
    Object.entries(books).forEach(b => {
        let [id, data] = b;
        let author = data.author;
        let title = data.title;


        let tr = document.createElement('tr');
        tr.setAttribute('data-id', id);
        let tdBookname = document.createElement('td');
        tdBookname.textContent = title;
        let tdBookAuthor = document.createElement('td');
        tdBookAuthor.textContent = author;
        let tdButtons = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';

        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(deleteBtn);

        tr.appendChild(tdBookname);
        tr.appendChild(tdBookAuthor);
        tr.appendChild(tdButtons);

        tableBody.appendChild(tr);

    })
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book)
    });

    event.target.reset();
    getBooks();
};




async function editOrDeleteRow(e) {
    if (e.target.className === 'edit') {
        createForm.style.display = 'none';
        editForm.style.display = 'block';
        const bookId = e.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(bookId);
    } else if (e.target.className === 'delete') {

        const confirmed = confirm('Are you sure?')
        if (confirmed) {
            const bookId = e.target.parentNode.parentNode.dataset.id;
            deleteBook(bookId);
        }
    } else {
        createForm.style.display = 'block';
        editForm.style.display = 'none';
    };

};

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);

    document.querySelector('#editForm [name="id"]').value = id;

    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;

    document.querySelector('#editForm [type="button"]').addEventListener('click', () => {
        document.querySelector('#editForm [name="title"]').value = '';
        document.querySelector('#editForm [name="author"]').value = '';
    });
};

async function deleteBook(id) {
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete',
    });
    getBooks();
};
async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book)
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
    event.target.reset();
    getBooks();
};






