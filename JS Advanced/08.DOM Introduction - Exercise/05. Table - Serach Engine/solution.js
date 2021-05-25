function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');
   function onClick() {
      let input = document.querySelector('#searchField').value.toLowerCase();

      for (let row of rows) {
         if (row.textContent.toLowerCase().includes(input) && input.value !== '') {
            row.setAttribute('class','select')
         }else{
            row.removeAttribute('class')
         }
      }

   }
}
