var textInput = document.querySelector('#input__mensagem');
var outInput = document.querySelector('#output');

function criptografar(){
    var mensagem1 = textInput.value

    var resultadoCripto = mensagem1
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readyonly id="mensagem1">'
    + resultadoCripto + '</textarea>' + '<button class="botao__copiar" id="copiar" onclick="copiar()">&#128190 Copiar &#128190</button>'   

    var apagarMensagemInput = textInput.value = "";
}


function descriptografar() {
    var mensagem1 = textInput.value;

    var resultadoDescripto = mensagem1
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    document.getElementById('output').innerHTML = '<textarea readonly id="mensagem1">'
    + resultadoDescripto + '</textarea>' + '<button class="botao__copiar" id="copiar" onclick="copiar()">&#128190 Copiar &#128190</button>'  
}


function copiar() {
    var textoCop = document.getElementById("mensagem1");

    textoCop.select();
    textoCop.setSelectionRange(0,99999);
    document.execCommand('copy');
    alert(`Sua mensagem "${textoCop.value}" foi copiada!`);
}
