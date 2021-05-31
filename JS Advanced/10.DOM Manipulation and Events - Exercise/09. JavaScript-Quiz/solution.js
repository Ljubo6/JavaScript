  
function solve() {
  let count = 0;
  let index = 0;
  let result = document.getElementById('results')
  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  Array.from(document.getElementsByClassName('answer-text')).forEach(el => {

    el.addEventListener('click', () => {
      if (rightAnswers.includes(el.textContent)) {
        count++;

      }

      let currentSection = document.getElementsByTagName('section')[index]
      currentSection.style.display = 'none'

      let nextSection = document.getElementsByTagName('section')[index + 1]
      if(nextSection != undefined) {
        nextSection.style.display = 'block'
      } else {
        currentSection.setAttribute('class', 'hidden')
        result.style.display = 'block'
        if(count == 3 ) {
          result.querySelector('.results-inner > h1').innerHTML = `You are recognized as top JavaScript fan!`
        } else {
          result.querySelector('.results-inner > h1').innerHTML = `You have ${count} right answers`
        }
      }
      index++
    })


  })
}
