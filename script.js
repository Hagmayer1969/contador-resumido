let numero = 0
function add() {
    numero++
    render()
}
function res() {
    numero = 0
    render()
}
function dim() {
    numero--
    render()
}
function render() {
    document.querySelector("p").innerText = numero
    if (numero > 0) {
        document.querySelector("p").style.color = "gray"
    }
    else if (numero < 0) {
        document.querySelector("p").style.color = "red"

    }    else {
    document.querySelector("p").style.color = "white"
}
     
}
   