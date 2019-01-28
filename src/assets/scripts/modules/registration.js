var btn = document.querySelector('.button'),
    regForm = document.querySelector('.registration'),
    iFrame = document.querySelector('.registration__frame');

btn.addEventListener('click', function(e){
    e.preventDefault;
    regForm.style.display = 'block';
});
regForm.addEventListener('click', function(e){
    e.preventDefault;
    regForm.style.display = 'none';
});