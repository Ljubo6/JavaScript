function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let cases = {
    'Camel Case': function(text){
      return text.split(' ').map((x,i) =>{
        if (i > 0) {
          return x[0].toUpperCase() + x.substring(1).toLowerCase();
        }
        return x.toLowerCase();
        
      }).join('');
    },
    'Pascal Case':function(text){
      return text.split(' ').map(x => x[0].toUpperCase() + x.substring(1).toLowerCase()).join('');
    }

  }
  
  if (!cases[namingConvention]) {
    result.textContent = 'Error!';
  }else{
    result.textContent = cases[namingConvention](text);
  }
  
}