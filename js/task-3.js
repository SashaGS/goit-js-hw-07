
const elemInput = document.getElementById('name-input');
const elemOutput = document.getElementById('name-output');

elemInput.addEventListener('input', () => {
    const txt = elemInput.value.trim();
    if (txt === "") {
        elemOutput.textContent ="Anonymous"; 
    } else { 
        elemOutput.textContent = `${txt}`;
    };
    // console.log(txt);
 });

