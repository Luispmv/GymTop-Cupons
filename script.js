alert("Los cupones disponibles son: cupon1, cupon2, cupon3, cupon4, cupon5")

const initialContent = document.getElementById("initial-content")
const success = document.getElementById("sucess-cupon")
const precioInput = document.getElementById("precio")
const cuponInput = document.getElementById("cupon")
const btnCupon = document.getElementById("cuponbtn")
const btnResultado = document.getElementById("botonResultado")


btnCupon.addEventListener("click", function(event){
    event.preventDefault()
})
btnCupon.addEventListener("click", verificarCupon)

const cupones = {
    "cupon1": 20,
    "cupon2": 30,
    "cupon3": 40,
    "cupon4": 50,
    "cupon5": 75
}

function verificarCupon(){
    let cupon = cuponInput.value
    let precio = precioInput.value
    let descuento = 0
    let precioFinal = 0
    if(cupones[cupon]){
        descuento = precio * (cupones[cupon])/100
        precioFinal = Math.floor(precio - descuento)
        initialContent.style.display = "none"
        success.style.display = "flex"
        btnResultado.innerText = "Tu descuento $" +  precioFinal
    }else{
        cuponInput.style.outline = "solid"
        cuponInput.style.outlineColor = "red"
    }
}

