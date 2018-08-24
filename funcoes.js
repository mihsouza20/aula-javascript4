function trocarImagem() {
	document.getElementById("myImage").src="img/html-logo-badge-512.png";
}
function imagemTroca() {
	document.getElementById("myImage").src="img/js-logo-badge-512.png";
}
function trocarFonteMaior() {
	document.getElementById("demo").style.fontSize="35px";
}
function trocarFonteMenor() {
	document.getElementById("demo").style.fontSize="16";
}
function ocultarElemento() {
	document.getElementById("demo").style.display="none";
}
function naoOcultarElemento() {
	document.getElementById("demo").style.display="block";
}
function Calcular() {
	var total = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
}
