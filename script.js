const initialContent = document.getElementById("initial-content")
const success = document.getElementById("sucess-cupon")
const cuponInput = document.getElementById("cupon")
const btnCupon = document.getElementById("cuponbtn")

btnCupon.addEventListener("click", function(event){
    event.preventDefault()
})
btnCupon.addEventListener("click", verificarCupon)

const cupones = {
    "cupon1": 34,
    "cupon2": 37,
    "cupon3": 42,
    "cupon4": 25,
    "cupon5": 25
}
let anchoPantalla = window.innerWidth;

function verificarCupon(){
    let cupon = cuponInput.value 
    if(cupones[cupon]){
        initialContent.style.display = "none"
        success.style.display = "flex"
    }
}

// Mostrar el ancho en la consola para verificar
console.log("Ancho de la pantalla: " + anchoPantalla);