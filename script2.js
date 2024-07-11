document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('encryptButton').addEventListener('click', function() {
        encryptText(3); // Clave de cifrado fija para encriptar
    });
    document.getElementById('decryptButton').addEventListener('click', function() {
        decryptText(3); // Clave de cifrado fija para desencriptar
    });
    document.getElementById('clearButton').addEventListener('click', clearTextAreas); // Asocia el botón de limpiar
});

// Función para encriptar el texto
function encryptText(shift) {
    // Obtiene el texto del área de entrada
    const inputText = document.getElementById('inputText').value;
    // Llama a la función de cifrado y coloca el resultado en el área de salida
    document.getElementById('outputText').value = caesarCipher(inputText, shift);
}

// Función para desencriptar el texto
function decryptText(shift) {
    // Obtiene el texto del área de entrada
    const inputText = document.getElementById('inputText').value;
    // Invierte la clave de cifrado (desplazamiento) para desencriptar
    shift = -shift;
    // Llama a la función de cifrado con el desplazamiento negativo y coloca el resultado en el área de salida
    document.getElementById('outputText').value = caesarCipher(inputText, shift);
}

// Función para realizar el Cifrado César
function caesarCipher(str, shift) {
    // Divide el texto en caracteres individuales y los mapea
    return str.split('').map(char => {
        // Verifica si el carácter es una letra
        if (char.match(/[a-z]/i)) {
            // Obtiene el código ASCII del carácter
            let code = char.charCodeAt(0);
            // Determina si la letra es mayúscula o minúscula
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            // Aplica el cifrado y asegura que esté dentro del rango de letras
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
        }
        // Si no es una letra, devuelve el carácter sin cambios
        return char;
    }).join('');
}

// Función para limpiar las áreas de texto
function clearTextAreas(){
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}
