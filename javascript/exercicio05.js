function verificarNumero(){

    var num1;//declarar variavel
    var num2;
    var num3;
    
    var maior;
    
    //coletar dados 

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    var maior = num1;
    //realizar conta

if (num2 > maior) {
     maior = num2;
} 
if(num3 > maior)
{
    maior = num3;
}  



document.getElementById("res").innerHTML = maior;
}