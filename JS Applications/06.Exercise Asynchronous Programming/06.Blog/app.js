const viewBtn = document.getElementById('btnViewPost');
function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click',getPosts);
    viewBtn.addEventListener('click',displayPost);
    viewBtn.disabled = true;
    
}

attachEvents();


async function getPosts(){
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const data = await response.json();

    const select = document.getElementById('posts');
    select.innerHTML = '';

    Object.values(data).map(createOption).forEach(o => select.appendChild(o));
    viewBtn.disabled = false;
}

function createOption(post){
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}
function displayPost(){
    const postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);
}
async function getCommentsByPostId(postId){
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId;
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);
    const postData = await postResponse.json()

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const commentsData = await commentsResponse.json()
    const comments = Object.values(commentsData).filter(c => c.postId === postId);

    comments.map(createComment).forEach(c => {
        commentsUl.appendChild(c)
    });
}
function createComment(comment){
    const result = document.createElement(`li`);
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}
  
// function attachEvents() {
//     document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
//     document.getElementById('btnViewPost').addEventListener('click', loadComments);

// }

// attachEvents();

// async function loadPosts() {
//     const selectRef = document.getElementById('posts');

//     const url = 'http://localhost:3030/jsonstore/blog/posts';
//     const response = await fetch(url);
//     const postsData = await response.json();

//     Object.values(postsData).forEach(p => {
//         const option = document.createElement('option');
//         option.value = p.id;
//         option.textContent = p.title;
//         selectRef.appendChild(option);
//     })

// }

// async function loadComments() {
//     const h1Ref = document.getElementById('post-title');
//     const ulBodyRef = document.getElementById('post-body');
//     const ulCommentsRef = document.getElementById('post-comments');
//     const chosenOptionId = document.getElementById('posts').value;

//     const url = 'http://localhost:3030/jsonstore/blog/comments';
//     const urlTwo = `http://localhost:3030/jsonstore/blog/posts/${chosenOptionId}`;
//     const [commentsResponse, postsResponse] = await Promise.all([
//         fetch(url),
//         fetch(urlTwo),
//     ])

//     const commentsData = await commentsResponse.json();
//     const postsData = await postsResponse.json();

//     h1Ref.textContent = postsData.title;
//     ulBodyRef.textContent = postsData.body;

//     const filteredComments = Object.values(commentsData).filter(c => {
//         return c.postId == chosenOptionId;
//     });
//     filteredComments.forEach(c => {
//         const liElement = document.createElement('li');
//         liElement.textContent = c.text;
//         ulCommentsRef.appendChild(liElement)
//     })
// }