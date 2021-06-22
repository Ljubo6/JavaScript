function notify(message) {
  const divRef = document.getElementById('notification');
  divRef.addEventListener('click',hideIt);
  divRef.textContent = message;
  divRef.style.display = 'block';
  function hideIt(){
    divRef.style.display = 'none';
  }
}