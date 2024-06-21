function verificarIdade(){

    var idade;//declarar variavel

    //coletar dados 

    idade = parseInt(document.getElementById("idade").value);

    //realizar conta

if (idade >= 18) {
     idade = " É maior de idade.";
} else   
    idade =  " è menor de idade";


document.getElementById("res").innerHTML = idade;
}