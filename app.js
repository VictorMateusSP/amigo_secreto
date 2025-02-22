//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value.trim();

    if(nome == "") {
        alert("Por favor, insira um nome.");
    }
    else {
        if(amigos.includes(nome)) {
            alert("Por favor, não repetir um nome.");
            document.getElementById('amigo').value = '';
        }
        else {
            amigos.push(nome);
            document.getElementById('amigo').value = '';
        }
    }
    
    //console.log(amigos);
    atualizarLista();
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]}</li>`;
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        let indiceSorteado = Math.floor(Math.random() * amigos.length);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        resultado.innerHTML += `O amigo ${amigos[indiceSorteado]} foi sorteado!`;
    }
    else{
        alert("A lista de amigos está vazia!");
    }
}