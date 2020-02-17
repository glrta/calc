const buttons = document.getElementsByClassName('buttons');
console.log(buttons);
 buttons[0].addEventListener('click', (event) => {
     console.log(event.target.innerText);
 }) 