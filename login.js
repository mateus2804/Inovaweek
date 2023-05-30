const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const typeSelect = document.querySelector("#type")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var errorElement = document.querySelector("#error")

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        errorElement.innerHTML = "ERRO: Campo de email vazio."
        return;
    }

    if (passwordInput.value === "")
    {
        errorElement.innerHTML = "ERRO: Campo de senha vazio."
        return
    }
    else if (!isPasswordValid(passwordInput.value, 8)) {
        errorElement.innerHTML = "ERRO: Senha tem de possuir mais de 8 dígitos."
        return;
    }

    if (typeSelect.value === "")
    {
        errorElement.innerHTML = "ERRO: Selecione alguma opção para prosseguir"
        return;
    }

    if (emailInput.value === email_motorista && passwordInput.value === senha_motorista && typeSelect.value === "motorista")
    {
        window.location.href = "menu-motorista.html"
        return true;
    }
    else if (emailInput.value === email_cliente && passwordInput.value === senha_cliente && typeSelect.value === "usuario")
    {
        window.location.href = "menu-usuario.html"
        return true;
    }
    else 
    {
        errorElement.innerHTML = "Esse Usuário/Motorista não existe."
        return;
    }


    form.submit()
})

function isEmailValid (email)
{
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email))
    {
        return true;
    }

    return false;
}

function isPasswordValid (password, minDigits)
{
    if (password.length >= minDigits)
    {
        return true;
    }

    return false;
}

