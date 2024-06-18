const form = document.getElementById('form-numeros');
const inputNumero1 = document.getElementById('campoA');
const inputNumero2 = document.getElementById('campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    let result =  + (numero2);
    let result2 = + (numero1);

    const messageSucess = (`${result} é maior que o primeiro numero`);

    const messageFail = (`O primeiro numero "${result2}" deve ser menor que o segundo!`);

    if (numero1 <= numero2) {
        const messageResult = document.querySelector('.messageSucess');
        messageResult.innerHTML = messageSucess;
        messageResult.style.display = 'block';

        inputNumero1.value = ``;
        inputNumero2.value = ``;
    }else {
        const messageResult = document.querySelector('.messageFail');
        messageResult.innerHTML =  messageFail;
        messageResult.style.display = 'block';

        inputNumero1.value = ``;
        inputNumero2.value = ``;
    }
})