var btn = document.querySelector('.button'),
    regForm = document.querySelector('.registration');

    console.log(btn,regForm);

btn.addEventListener('click', function(e){
    e.preventDefault;
    regForm.style.height = '350px';
});