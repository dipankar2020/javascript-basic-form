const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('.users')


form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000)
        
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);

        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }


}