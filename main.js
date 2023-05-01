
function comparar(){
    var a = document.getElementById("primer_numero").value;
    var a_numero = parseFloat(a,10);
    var b = document.getElementById("segundo_numero").value;
    var b_numero = parseFloat(b,10);
    if ( a==""||b==""){
        alert("Introduce los dos valores por favor");
    } else if (a_numero > b_numero) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = a_numero;
    } else {
        var result = document.getElementById("resultado");
        result.innerHTML = b_numero;
    }
}
function limpiar(){
    document.getElementById("primer_numero").value = "";
    document.getElementById("segundo_numero").value = "";
    var result = document.getElementById("resultado");
    result.innerHTML = "?";
}