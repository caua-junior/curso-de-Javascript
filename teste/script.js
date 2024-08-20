function tabuada() {
    var n = parseInt(document.getElementById("numero").value);
    var res = document.getElementById("res");
    var tabuada = "";
    for(var c = 1; c <= 10 ; c++)
       tabuada += n + "x" + c + "=" + n * c + "<br/>"
        res.innerHTML = tabuada

    
}
