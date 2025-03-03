function actualizarCuentaRegresiva() {
    const fechaObjetivo = new Date("2025-06-01T00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia < 0) {
        document.getElementById("countdown").innerHTML = "¡Ya estamos en línea!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();