const toogleButton = document.getElementById('toggle-theme');

const htmElement = document.body;

toogleButton.addEventListener('click', ()=>{

    htmElement.classList.toggle("dark-mode");
   
 
})
