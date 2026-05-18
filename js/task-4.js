
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    
    const emailValue    = form.elements['email'].value; 
    const passwordValue = form.elements['password'].value;

    if (emailValue === '' || passwordValue === '') {
        alert("All form fields must be filled in");
    }

    const dataForm = new FormData(form);
    const data ={
        email:   dataForm.get('email').trim(),
        password:dataForm.get('password').trim(),
    };

    console.log(data);
    form.reset();
    
});

