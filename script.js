// Buscamos los elementos por sus id
const selectOfertas = document.getElementById("oferta");
const inputCantidad = document.getElementById("cantidad");
const spanTotal = document.getElementById("precio-total");

// Creamos la funcion para calcular
function calcularTotal() {
    const precio = Number(selectOfertas.value);
    const cantidad = Number(inputCantidad.value);
    const total = precio * cantidad;

    // Mostramos el resultado en el letrero
    spanTotal.textContent = total;
}

// Ponemos los escuchas para cuando cambien los valores
selectOfertas.addEventListener("change", calcularTotal);
inputCantidad.addEventListener("input", calcularTotal);

// calculamos al iniciar
calcularTotal();

// Valiar el numero de telefono de Cuba al enviar el formulario
const inputTel = document.getElementById("numero-telefono");
const mensajeError = document.getElementById("error-telefono");
const form = document.getElementById("formulario-recargas");

form.addEventListener("submit", function(e) {
    const regexCuba = /^(\+?53)?[56][0-9]{7}$/;

    if (!regexCuba.test(inputTel.value)) {
        e.preventDefault();
        mensajeError.style.display = "block";
        inputTel.style.border = "2px solid #d9534f";
    } else {
        mensajeError.style.display = "none";
        inputTel.style.border = "2px solid #5cb85c";
    }
});

// Logica para mostrar la tarjeta y el numero a confirmar
const selectMetodo = document.getElementById("metodo-pago");
const infoPago = document.getElementById("info-pago");
const textoMetodo = document.getElementById("texto-metodo");
const spanNumeroCopiar = document.getElementById("numero-a-copiar");
const btnCopiar = document.getElementById("btn-copiar");
const avisoCopiado = document.getElementById("aviso-copiado");

// Coloca aqui el numero de telefono otarjeta que el cliente debe usar para confirmar/transferir
const datosPago = {
    transfermovil: "9212 0699 9115 8296",
    enzona: "9212 0699 9115 8296"
};

selectMetodo.addEventListener("change", function() {
    const metodoSeleccionado = this.value;

    if (metodoSeleccionado && datosPago[metodoSeleccionado]) {
        infoPago.style.display = "block";
        textoMetodo.innerText = "Numero a Confirmar:";
        spanNumeroCopiar.innerText =datosPago[metodoSeleccionado];   
    } else {
        infoPago.style.display = "none";
    }
});

// Boton para copiar automaticamnete el numero de la tarjeta
if (btnCopiar) {
    btnCopiar.addEventListener("click", function() {
             const textoACopiar = spanNumeroCopiar.innerText;

             navigator.clipboard.writeText(textoACopiar).then(function() {
                 avisoCopiado.style.display = "block";
                 setTimeout(function() {
                     avisoCopiado.style.display = "none";
                 }, 2500);
             });
    });
}


