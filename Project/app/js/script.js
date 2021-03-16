const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', () => 
{
    if(header.classList.contains('open')){ // Close
        header.classList.remove('open');
        body.classList.remove('noscroll');

        fadeElems.forEach((value)=>{
            value.classList.remove('fade-in');
            value.classList.add('fade-out');
        })
    }else{
        header.classList.add('open');     // Open
        body.classList.add('noscroll');

        fadeElems.forEach((value)=>{
            value.classList.remove('fade-out');
            value.classList.add('fade-in');
        })
    }
    
})