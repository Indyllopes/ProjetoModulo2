function cCesar(codific, texto, valorIncremento) {
    valorIncremento = Number(valorIncremento);

    let mensagemFinal = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let codigo = letra.charCodeAt();

        if (codific == "codificar") {
            codigo += valorIncremento;
        } else {
            codigo -= valorIncremento;
        }
        mensagemFinal += String.fromCharCode(codigo);
    }
    return mensagemFinal;
}

let escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
    evento.preventDefault();

    let incremento = document.getElementById("valorIncremento");

    if (evento.target.value == "cifraCesar") {
        incremento.style = "display: flex";
    } else {
        incremento.style = "display: none";
    }

    
});

let formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let texto = formulario.texto.value;
    let escolha = formulario.escolhaMetodo.value;
    let botoes = formulario.codificar.value;
    let valorIncremento = formulario.valorIncremento.value;
    let mensagemFinal = "";

    if (escolha == "cifraCesar") {
        mensagemFinal = cCesar(botoes, texto, valorIncremento);
    } else {
        mensagemFinal = base64(botoes, texto);
    }

    let resultadoTexto = document.getElementById("resultado");
    resultadoTexto.innerHTML = `${mensagemFinal}`;
});

function base64(codific, texto) {
    if (codific == "codificar") {
        return btoa(texto);
    } else {
        return atob(texto);
    }
}