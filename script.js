const btnContainer = document.querySelector('.button-numbers')
const submitBtn = document.querySelector('.btn-submit');
const btns = btnContainer.getElementsByClassName('btn');


const imprime = () => {
    location.href = "./submit.html";
};
const classe = () => {
    btnContainer.addClass('selected');
    btnContainer.removeClass('selected');
};

submitBtn.addEventListener("click", imprime);
btnContainer.addEventListener("click", classe);

