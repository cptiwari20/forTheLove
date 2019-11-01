let frontContainer = document.querySelector('.front-container');
let mainContainer = document.querySelector('.main-container');
let superFrontContainer = document.querySelector('.super-front-container');
let btn = document.querySelector('.btn');

let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
let div5 = document.querySelector('.div5');



btn.addEventListener('click', (e)=> {
    e.preventDefault();
    superFrontContainer.classList.add('fade-out-super-container');

    div1.classList.add('slide-up');
    div2.classList.add('slide-down');
    div3.classList.add('slide-up');
    div4.classList.add('slide-down');
    div5.classList.add('slide-up');
    setTimeout(() =>{
        frontContainer.classList.add('make-it-hide');
    }, 3000);
    setTimeout(()=>{
        mainContainer.classList.add('fade-in-main-container');
    },1000);
    setTimeout(() => {
        mainContainer.style.backgroundColor = '#f0134d';
    }, 5000);
    setTimeout(() => {
        superFrontContainer.style.display = 'none';    
    }, 1000);
});