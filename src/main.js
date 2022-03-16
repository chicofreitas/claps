//
let clap_button = document.querySelector('button');
let clap_register = document.querySelector('p');
let clap_counter = 0;

// 
clap_register.textContent = 'You have 0 claps!';

//
clap_button.addEventListener('click', ()=>{
    clap_register.textContent = 'You have ' + (++clap_counter) + ' claps!';
});