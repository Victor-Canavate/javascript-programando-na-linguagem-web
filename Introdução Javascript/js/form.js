let form = document.querySelector('#form-adiciona');
let botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');


botaoAdicionarPaciente.addEventListener('click', function(event) {
    event.preventDefault()

    //OBJETO DO PACIENTE (DADOS)
    let paciente = obtemPacienteDoForm(form);
    console.log(paciente)

    //CÓDIGO PARA MONTAR A LINHA NA TABELA (PUXA OS DADOS DO PACIENTE)
    

    let erros = validaPaciente(paciente)

    //CÓDIGO PARA CRIAR MENSAGENS DE ERRO CASO HAJA UM CAMPO ERRADO
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //FUNÇÃO PARA ADICIONAR O PACIENTE NA TABELA APÓS AS VERIFICAÇÕES BEM-SUCEDIDAS
    adicionaPacienteNaTabela(paciente)



    limpaUl()
    form.reset()

})

//FUNÇÕES ////////////////////////////////////////////////////

//FUNÇÃO PARA OBTER OS DADOS DO PACIENTE EM FORMA DE OBJETO
function obtemPacienteDoForm(form) {
    
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }

    return paciente
}

//FUNÇÃO PARA MONTAR A LINHA DO PACIENTE  (PUXA OS DADOS DO OBJETO)
function montaTr(paciente) {

    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

//FUNÇÃO QUE CRIA CADA QUADRADO DA LINHA
function montaTd(dado, classe ) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//FUNÇÃO QUE VERIFICA ERROS, E CASO HAJA, CRIA UMA ARRAY COM AS MENSAGENS
function validaPaciente(paciente) {

    let erros = []

    if(!validaPeso(paciente.peso)){
        erros.push('Peso inválido!');
    }

    if(!validaAltura(paciente.altura)) {
        erros.push('Altura inválida!');
    }

    if(validaNomePaciente(paciente.nome)) {
        erros.push('O nome não pode ser em branco.');
    }

    if(validaGordura(paciente.gordura)) {
        erros.push('Gordura inválida')
    }

    return erros;
}

//FUNÇÃO QUE EXIBE AS MENSAGENS DA ARRAY EM FORMA DE <LI>
function exibeMensagensDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro');
    limpaUl()

    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
}

//FUNÇÃO PARA VERIFICAR O NOME DO PACIENTE
function validaNomePaciente(nome) {
   if(nome.length == 0) {
    return true;
   } else {
    return false;
   }
}

//FUNÇÃO PARA LIMPAR A <UL> POR COMPLETO
function limpaUl() {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = '' 
}

//FUNÇÃO PARA ADICIONAR PACIENTE NA TABELA
function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr)
}
