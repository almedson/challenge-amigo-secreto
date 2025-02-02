// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
const amigo = document.getElementById('amigo');
// Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
const listaAmigos = document.getElementById('listaAmigos');

const messsagemErro = document.getElementById('messsagemErro');
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = amigo.value.trim();

    // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.;;
    if (nomeAmigo !== '') {
        console.log(nomeAmigo);
        messsagemErro.style.display = 'none';
        messsagemErro.innerHTML = '';
        adicionarArrayAmigo(nomeAmigo);
        criarListaAmigos();
        amigo.value = ''; //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
        
    } else {
        // Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        messsagemErro.innerHTML = 'Por favor, insira um nome.';
        messsagemErro.style.display = 'block';
        console.log(amigo.value);
    }
}

/*Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes 
dos amigos usando o método .push().*/
function adicionarArrayAmigo(nome) {
    if (nome !== '' && !amigos.includes(nome)) {
        amigos.push(nome);
    } else if (amigos.includes(nome)) {
        messsagemErro.innerHTML = `Amigo(a) ${nome} já está na lista.<br> Insira outro nome por favor,`;
        messsagemErro.style.display = 'block';
    }

    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
    }
}

amigo.addEventListener('change', function () {
    messsagemErro.style.display = 'none';
});


function criarListaAmigos() {
    //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    listaAmigos.innerHTML = "";
    criarLista();
}

//Crie uma função que percorra o array amigos e adicione cada nome como um elemento < li > dentro de uma lista HTML.Use innerHTML para limpar a lista antes de adicionar novos elementos.
function criarLista() {
    let listaHTML = "";
    //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista(<li>) para cada nome.
    for (let i = 0; i < amigos.length; i++) {
        //Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
        listaHTML += "<li>" + amigos[i] + "</li>";
    }
    
    listaAmigos.innerHTML  = listaHTML;
}




