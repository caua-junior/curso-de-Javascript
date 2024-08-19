function contar(){
var i = document.getElementById("inicio")
var f = document.getElementById("fim")
var p = document.getElementById("passo")
var res = document.getElementById("res")
if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
    res.innerHTML = "Impossivel contar"
    //window.alert("ERRO faltam dados")
    
}else{
    res.innerHTML = "contando: <br>"
    var i = Number(i.value)
    var f = Number(f.value)
    var p = Number(p.value)
    if (p<=0){
        window.alert("Passo invalido!Considerando PASSO 1")
        p=1
    }
    if (i<f){
        //Contagem crescente
         for(var c = i;c <= f;c +=p){ 
             res.innerHTML += ` ${c} \u{1f449}`
            }
         }else {
            //Contagem regressiva
            for(var c = i;c >= f;c -= p){
                res.innerHTML += ` ${c} \u{1f449}` 
            }
         }   
           res.innerHTML += `\u{1F3C1}`
    }
   
}