function getArticleGenerator(articles) {

    const divRef = document.getElementById('content');
    function next(){
        if (articles.length > 0) {
            let currentArticle = articles.shift();
            let newArticle = document.createElement('article');
            newArticle.textContent += currentArticle;
            divRef.appendChild(newArticle);
        }else{
            return;
        }
    }
    return next;
}
