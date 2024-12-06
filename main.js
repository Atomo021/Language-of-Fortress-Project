function tradcom(traducircompletamente) {
    const lenen = "AÀÁÂÄÅBCDEÈÉÊËFGHIÌÍÎÏKLMNOÒÓÔÖRSTUÙÚÛVZaàáâäåbcdeèéêëfghiìíîïklmnoòóôörstuùúûvz";
    const vocales = "AÀÁÂÄÅEÈÉÊËIÌÍÎÏOÒÓÔÖUÙÚÛaàáâäåeèéêëiìíîïoòóóöuùúû";
    const consonantes = "BCDFGHKLMNRSTVZbcdfghklmnrstvz";
    const reglasDigrafos = {
    'ch': 'sh',
    'll': 'g',
    'ja': 'sha',
    'wh': 'ng'
    // ... otras reglas
  };
    const equivalentesEnanos = {
        'sh': 'sh_enano',
        'th': 'th_enano',
        'ng': 'ng_enano',
        // ... otros equivalentes

    }; 
    
 	// Función auxiliar para verificar si un carácter es una vocal enano
    function esVocalEnano(char) {
        return vocales.includes(char);
    }

    // Función auxiliar para verificar si un carácter es una consonante enano
    function esConsonanteEnano(char) {
        return consonantes.includes(char);
    }

    function manejarDigrafos(str, index) {
        for (const digrafo in equivalentesEnanos) {
            if (str.substr(index, digrafo.length) === digrafo) {
                return equivalentesEnanos[digrafo];
            }
        }
        // Si no se encontró ningún dígrafo, manejar el error
        const digrafoDesconocido = str.substr(index, 2) 
        if (digrafoDesconocido in reglasDigrafos) {
        	return reglasDigrafos[digrafoDesconocido]
        }
        else {
        	console.warn()
        }
    }
	// Convertir a minúsculas y validar la entrada
    traducircompletamente = traducircompletamente.toLowerCase();
    if (!/^[a-zA-Z]+$/.test(traducircompletamente)) {
        return "Entrada inválida: solo se permiten letras del alfabeto latino básico ISO.";
    }

    let resultado = '';
    for (let i = 0; i < traducircompletamente.length; i++) {
        const char = traducircompletamente[i];
        if (esVocalEnano(char) || esConsonanteEnano(char)) {
            resultado += char;
        } else if (i < traducircompletamente.length - 1) {
            resultado += manejarDigrafos(traducircompletamente, i);
            i++; // Saltar el siguiente carácter si se encontró un dígrafo
        } else {
            // Manejar el último carácter si no es válido
            // Por ejemplo, ignorarlo:
            resultado += '';
        }
    }
    return resultado;
}
function traducir() {
  // Obtener el texto de entrada del textarea
  const textoEntrada = document.querySelector('textarea[name="cuatex1"]').value;

  // Llamar a la función tradcom para obtener el texto traducido
  const textoTraducido = tradcom(textoEntrada);

  // Mostrar el texto traducido en el segundo textarea
  document.querySelector('textarea[name="cuatex2"]').value = textoTraducido;
}