const botaoCalcular = document.getElementById("botao-calcular");

botaoCalcular.addEventListener("click", function(){
    const campoValor1 = document.getElementById("valor1");
    const campoValor2 = document.getElementById("valor2");
    const campoResultado = document.getElementById("campo-resulrado");

    if (campoValor1.value === "" || campoValor2.value === ""){
        alert("Digite os dois valores!");
        return;
    }

});




