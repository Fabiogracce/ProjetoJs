function bissexto(){

    var ano;//declarar variavel

    //coletar dados 

    ano = parseInt(document.getElementById("ano").value);

    //realizar conta

    if(ano % 4 == 0){
        ano = "O ano é bissexto!";
    }
    else{
        ano = " Não e bissexto";
    }
    document.getElementById("res").innerHTML = ano;

}