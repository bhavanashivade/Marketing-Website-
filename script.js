let Navbar = document.querySelector('.navbar');

document.querySelector('#bars').onclick = () => {
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    LoginForm.classList.remove('active');




}

let SearchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
    SearchForm.classList.toggle('active');
    Navbar.classList.remove('active');
    LoginForm.classList.remove('active');



}


let LoginForm = document.querySelector('.login-form');

document.querySelector('#user').onclick = () => {
    LoginForm.classList.toggle('active');
    SearchForm.classList.remove('active');
    Navbar.classList.remove('active');




}