let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for(let i = 0; i < pacientes.length; i++) {

    let tdPeso = pacientes[i].querySelector(".info-peso");
    let peso = tdPeso.textContent;
    let tdAltura = pacientes[i].querySelector(".info-altura");
    let altura = tdAltura.textContent;
    let tdImc = pacientes[i].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
    }



//FUNÇÕES //////////////////////////////////////////////////


    //FUNÇÃO QUE CALCULA O IMC DO PACIENTE
   function calculaImc(peso, altura) {
        imc = peso/ (altura*altura);
        return imc.toFixed(2);
   }

   //FUNÇÃO QUE VERIFICA E VALIDA O PESO
   function validaPeso(peso) {
        if(peso > 0 && peso < 1000 && peso.length > 0) {
            return true;
      } else {
        return false;
      }
    }

    //FUNÇÃO QUE VERIFICA E VALIDA A ALTURA
    function validaAltura(altura) {
        if(altura > 0 && altura < 3.0 && altura.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    //FUNÇÃO QUE VERIFICA E VALIDA A GORDURA
    function validaGordura(gordura) {
        if(gordura.length == 0 && gordura <= 0) {
            return true;
    } else {
        return false;
    }
}