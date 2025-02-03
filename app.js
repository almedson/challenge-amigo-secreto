// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
const amigo = document.getElementById('amigo');
// Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const trofeu = document.getElementById('trofeu');
const messsagemErro = document.getElementById('messsagemErro');
const botaoSortear = document.getElementById('botaoSortear');
const INSERIR_NOME =  'Por favor, insira um nome.';
const NONE = 'none';
const BLOCK = 'block';
const VAZIO = "";
const ZERO = 0;

let amigos = [];

trofeu.style.display = NONE;
botaoSortear.style.display = NONE;

function adicionarAmigo() {
    let nomeAmigo = amigo.value.trim();

    // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.;;
    if (nomeAmigo !== VAZIO) {
        adicionarArrayAmigo(nomeAmigo);
        criarListaAmigos();
        limparMensagemErro();
    } else {
        // Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        messsagemErro.innerHTML = INSERIR_NOME;
        messsagemErro.style.display = BLOCK;
    }
}

/*Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes 
dos amigos usando o método .push().*/
function adicionarArrayAmigo(nome) {

    if (nome !== VAZIO && !amigos.includes(nome)) {
        amigos.push(nome);
    } else if (amigos.includes(nome)) {
        messsagemErro.innerHTML = `Amigo(a) ${nome} já está na lista.<br> Insira outro nome por favor,`;
        messsagemErro.style.display = BLOCK;
    }
}

function limparMensagemErro(){
    messsagemErro.style.display = NONE;
    messsagemErro.innerHTML = VAZIO;
    amigo.value = VAZIO; //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    limparTrofeu();
}

function exibirBotaoSortear(){
    botaoSortear.style.display = BLOCK;
}

amigo.addEventListener('change', function () {
    messsagemErro.style.display = NONE;
    limparTrofeu();
});

function limparTrofeu(){
    trofeu.style.display = NONE;
    resultado.innerHTML = VAZIO;
}

function criarListaAmigos() {
    //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    listaAmigos.innerHTML = VAZIO;
    criarLista();
    exibirBotaoSortear();
}

//Crie uma função que percorra o array amigos e adicione cada nome como um elemento < li > dentro de uma lista HTML.Use innerHTML para limpar a lista antes de adicionar novos elementos.
function criarLista() {
    let listaHTML = VAZIO;

    //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista(<li>) para cada nome.
    for (let i = ZERO; i < amigos.length; i++) {
        //Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
        listaHTML += "<li>" + amigos[i] + "</li>";
    }

    listaAmigos.innerHTML  = listaHTML;
}

function sortearAmigo(){
    // Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    if( amigos.length > ZERO){
        messsagemErro.innerHTML = VAZIO;
        let indice = getIndiceAleatorio();
        // Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array. 
        // Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
        resultado.innerHTML = `${amigos[indice]}`;
        trofeu.style.display = BLOCK;
    }
}

// Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
function getIndiceAleatorio(){
    let numeroAleatorio = Math.random();
    numeroAleatorio = numeroAleatorio * amigos.length;
    let indiceAleatorio = Math.floor(numeroAleatorio);
    return indiceAleatorio;
}
