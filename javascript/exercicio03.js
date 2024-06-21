function verificar(){

    var num;//declarar variavel

    //coletar dados 

    num = parseInt(document.getElementById("num").value);

    //realizar conta

if (num < 0) {
    num =   " é negativo.";
} else if (num > 0) {
    num =  " é positivo.";
} else  
    num = "O número é zero.";

document.getElementById("res").innerHTML = num;
}