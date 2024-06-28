let nomeUusuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUusuário == ""){
    nomeUusuário = prompt("Qual o seu nome?");
}

if(nomeUusuário == null){
    elemento.textContent = 'Seja Muito Bem-Vindo!';
}else{
    elemento.textContent = nomeUusuário;
}

