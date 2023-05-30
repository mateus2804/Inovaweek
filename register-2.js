const form = document.querySelector("#form")
const idadeInput = document.querySelector("#idade")
const CPFInput = document.querySelector("#CPF")
const celInput = document.querySelector("#cel")
const CEPinput = document.querySelector("#CEP")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var errorElement = document.querySelector("#error")

    if (idadeInput.value === "")
    {
        errorElement.innerHTML = "ERRO: Campo de idade vazio."
        return;
    }

    if (!isIdadeValid(idadeInput.value))
    {
        errorElement.innerHTML = "Apenas maiores de idade são permitidos de serem registrados."
        return;
    }

    if (CPFInput.value === "") {
        errorElement.innerHTML = "ERRO: Campo de CPF vazio."
        return;
    }

    if (!isCPFValid(CPFInput.value, 11))
    {
        errorElement.innerHTML = "ERRO: CPF tem que ter 11 dígitos."
        return;
    }

    if (celInput.value === "")
    {
        errorElement.innerHTML = "ERRO: Campo do número de celular está vazio."
        return;
    }

    if (!isCelValid(celInput.value, 11))
    {
        errorElement.innerHTML = "ERRO: Número de celular tem que ter 11 dígitos."
        return;
    }
    
     if (CEPinput.value === "")
     {
        errorElement.innerHTML = "ERRO: Campo CEP está vazio."
        return;
     }

     if (!isCEPValid(CEPinput.value, 8))
     {
        errorElement.innerHTML = "ERRO: Campo CEP tem que ter 8 dígitos."
        return;
     }


    form.submit()
})

function isIdadeValid (idade)
{
    if (idade >= 18)
    return true;
    else
    return false;
}

function isCPFValid (cpf, tamanho)
{
    if (cpf.length === tamanho)
    {
        return true;
    }

    return false;
}

function isCelValid (cel, tamanho)
{
    if (cel.length === tamanho)
    {
        return true;
    }

    return false;
}

function isCEPValid (CEP, tamanho)
{
    if (CEP.length === tamanho)
    {
        return true;
    }

    return false;
}
