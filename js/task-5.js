
const elemBody = document.body;

const btnChColor = document.querySelector('.change-color');


btnChColor.addEventListener('click',(event)=>{
  event.preventDefault();
  let modifiedColor = getRandomHexColor();
 
  const elemColor = document.querySelector('.color');
  elemBody.style.backgroundColor = modifiedColor;
  elemColor.textContent= elemBody.style.backgroundColor;
 
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
