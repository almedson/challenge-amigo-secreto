// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
const amigo = document.getElementById('amigo');

const messsagemErro = document.getElementById('messsagemErro');
let amigos = [];



function adicionarAmigo() {
    // alert("PAssou");

    let nomeAmigo = amigo.value.trim() ;

    // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.;;
    if (nomeAmigo !== '') {
        console.log(nomeAmigo);
        messsagemErro.style.display = 'none';
        messsagemErro.innerHTML = '';
        adicionarArrayAmigo(nomeAmigo);
        amigo.value = '';
    } else {
        // Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        messsagemErro.innerHTML = 'Por favor, insira um nome.';
        messsagemErro.style.display = 'block';
        console.log(amigo.value);
    }

    //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes 
    //dos amigos usando o método .push().
    //amigos.push(amigo);
}

function adicionarArrayAmigo(nome){
    // alert(nome);
    if (nome !== '' && !amigos.includes(nome)) {
        amigos.push(nome);
        //console.log(`Amigo ${amigo} adicionado à lista.`);
    } else if (amigos.includes(nome)) {
        // console.log(`Amigo(a) ${nome} já está na lista. Insira outro nome por favor,`);
        messsagemErro.innerHTML = `Amigo(a) ${nome} já está na lista.<br> Insira outro nome por favor,`;
        messsagemErro.style.display = 'block';
    }

// amigos.push('Almedson');
// amigos.push('Leandro');

    for(let i = 0; i < amigos.length; i++){
        console.log(amigos[i]);
    }
}


amigo.addEventListener('change', function() {
    messsagemErro.style.display = 'none';
});


/*
Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
*/