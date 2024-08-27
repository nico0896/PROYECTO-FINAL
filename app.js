function encriptar() {
    // Tomamos el valor del campo de texto
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    // Reemplazamos las letras según las reglas dadas
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    // Mostramos el texto encriptado en el área de resultados
    document.getElementById("resultado").value = textoEncriptado;
}

function desencriptar() {
    // Tomamos el valor del campo de texto
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    // Reemplazamos las secuencias encriptadas con las letras originales
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    // Mostramos el texto desencriptado en el área de resultados
    document.getElementById("resultado").value = textoDesencriptado;
}

function copiar() {
    // Seleccionamos y copiamos el texto del área de resultados
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    document.execCommand("copy");
    
    // Notificamos al usuario que el texto ha sido copiado
    alert("Texto copiado");
}
