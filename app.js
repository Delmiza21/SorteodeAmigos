// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creando un array que almacenara los nombre de los amigos
let amigos = [];

//creando funcion para borrar elemento de la caja input
function borrarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value='';
}

function agregarAmigo(){
    //obtenemos valor del input y guardamos en una variable
    let nombreAmigo= document.getElementById('amigo').value;
    
    if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        //agregando a la lista de amigos
        amigos.push(nombreAmigo);
        
        //funcion recorre
        recorreAmigos();

        borrarCaja();
    }
}

//funcion mostrar en lista
function recorreAmigos(){
    let Lista = document.getElementById('listaAmigos');
    Lista.innerHTML = ""
    //iremos agregando los nombre de los amigos en vertical
    for(let i =0 ; i<amigos.length ; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        Lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        let cantidad = amigos.length;
        let indice = Math.floor(Math.random()*cantidad+1)
        console.log(amigos[indice]);
        let ganador = document.getElementById('resultado'); 
        ganador.innerHTML = amigos[indice];
    }else{
        alert('No hay nombres que sortear');
    }
}