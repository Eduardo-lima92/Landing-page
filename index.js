
var setaesquerda = window.document.getElementById("seta-esquerda")
var setadireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita(){
    Bruna.style = "display:none"
    Samanta.style = "display:flex"
    setaesquerda.style = "display:flex"
    setadireita.style = "display:none"
}

function RolarParaEsquerda(){
    Bruna.style = "display:flex"
    Samanta.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}
