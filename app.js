// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombresAmigos = [];
const inputNombre = document.querySelector('#amigo');
const btnAgregarAmigo = document.querySelector('.button-add');
const listaAmigosHtml = document.querySelector('#listaAmigos');
const amigoSecretoHtml = document.querySelector('#resultado');
let indiceAleatorio;
let nombreAleatorio;

const agregarAmigo = () => {
    if(inputNombre.value == ''){
        alert('Por favor, Inserte un nombre');
    }else{
        listaNombresAmigos.push(inputNombre.value);
        inputNombre.value = '';
        mostrarListaAmigos();
    }
    
}

const sortearAmigo = () =>{
    if(listaNombresAmigos.length === 0){
        alert('Debes Agregar los nombres de tus amigos');
    }else{
        indiceAleatorio = Math.floor(Math.random() * listaNombresAmigos.length);
        nombreAleatorio = listaNombresAmigos[indiceAleatorio];
        listaAmigosHtml.innerHTML = ''
        amigoSecretoHtml.innerHTML = `Tu amigo secreto es ${nombreAleatorio}`
    }
}

const mostrarListaAmigos = () =>{
    amigoSecretoHtml.innerHTML = ''
    listaAmigosHtml.innerHTML = '';

    listaNombresAmigos.forEach(amigo =>{
        listaAmigosHtml.innerHTML += `<li>${amigo}</li>`
    });
}
