let botao = document.querySelector('#buscar-pacientes');
botao.addEventListener('click', function(){
    console.log('Buscando...')
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    
    xhr.addEventListener('load', function(){

        if(xhr.status == 200){
        erroAjax.classList.add('invisivel')
        let resposta = this.responseText;
        let pacientes = JSON.parse(resposta);

        for(let i = 0; i < pacientes.length; i++){
            paciente = pacientes[i];
            adicionaPacienteNaTabela(paciente);
        }
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText)
            let erroAjax = document.querySelector('#erro-ajax')
            erroAjax.classList.remove('invisivel')
        }

        


    });

    xhr.send()

});
