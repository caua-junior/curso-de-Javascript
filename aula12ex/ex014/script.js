function carregar() {
   var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOMDIA
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //BOATARDE
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#f4a16e'
    }else{
        //BOANOITE
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}
