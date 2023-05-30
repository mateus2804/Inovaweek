const nome = document.querySelector("#subtituto")

nome.innerHTML = nome_motorista;

const form = document.querySelector("#form")
const form_2 = document.querySelector("#form-2")
const amigo_procurado = document.querySelector("#amigo-procurado")
const alerta = document.querySelector(".alerta")
const amigo_1 = document.querySelector("#amigo-1")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (amigo_procurado.value != nome_cliente)
    {
        alerta.innerHTML = "O usuário que você está procurando não existe"
        return;
    }

    else 
    {
        amigo_1.innerHTML = nome_cliente;
        return true;
    }




    form.submit()
})


if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position) {
        document.querySelector("#geoloc").innerHTML = "Localização atual: <br>latitude = " + position.coords.latitude + "<br> longitude = " + position.coords.longitude;
    })
}

