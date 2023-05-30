const nome_perfil_usuario = document.querySelector("#nome-perfil-usuario")
const idade_perfil_usuario = document.querySelector("#idade-perfil-usuario")
const cpf_perfil_usuario = document.querySelector("#cpf-perfil-usuario")
const email_perfil_usuario = document.querySelector("#email-perfil-usuario")
const cel_perfil_usuario = document.querySelector("#cel-perfil-usuario")
const endereco_perfil_usuario = document.querySelector("#endereco-perfil-usuario")
const titulo = document.querySelector(".title-link")

nome_perfil_usuario.textContent += nome_cliente;
idade_perfil_usuario.textContent += idade_cliente;
cpf_perfil_usuario.textContent += cpf_cliente;
email_perfil_usuario.textContent += email_cliente;
cel_perfil_usuario.textContent += celular_cliente;
endereco_perfil_usuario.textContent += endereco_cliente;
titulo.textContent += nome_cliente;