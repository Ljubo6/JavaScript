function solve() {
   let createBtn = document.querySelector('aside button.btn.create');
   createBtn.addEventListener('click', createArticleHandler);

   let posts = document.querySelector('main section');
  


   function createArticleHandler(e) {
      e.preventDefault();

      let authorRef = document.getElementById('creator');
      let titleRef = document.getElementById('title');
      let categoryRef = document.getElementById('category');
      let contentRef = document.getElementById('content');

      let article = createElement('article');
      let h1 = createElement('h1',titleRef.value);
      let p1 = createElement('p','Category:');
      let strong1 = createElement('strong',categoryRef.value);
      p1.appendChild(strong1);
      let p2 = createElement('p','Creator:');
      let strong2 = createElement('strong',authorRef.value);
      p2.appendChild(strong2);
      let p3 = createElement('p',contentRef.value);
      let div = createElement('div',undefined,'buttons');
      let deleteBtn = createElement('button','Delete','btn delete');
      deleteBtn.addEventListener('click',deleteArticle)
      let archiveBtn = createElement('button','Archive','btn archive');
      archiveBtn.addEventListener('click',archiveArticle)
      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);
      posts.appendChild(article);


      console.log(posts);

   }
   function deleteArticle(e){
      e.target.parentElement.parentElement.remove();
   }
   function archiveArticle(e){
      let article = e.target.parentElement.parentElement;
      let archiveOl = document.querySelector('.archive-section ol');
      let archiveLis = Array.from(archiveOl.querySelectorAll('li'));
      let h1Title = article.querySelector('h1');
      let title = h1Title.textContent;

      let newTitleLi = createElement('li');
      newTitleLi.textContent = title;
      article.remove();

      archiveLis.push(newTitleLi);
      archiveLis.sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(li => archiveOl.appendChild(li));

      console.log(archiveOl);
   }

   function createElement(type, content, className) {
      const result = document.createElement(type);
      result.textContent = content;
      if (className) {
         result.className = className;
      }
      return result;
   }
}
