/*=========================================================
Projeto : Status X92S
Arquivo : cabecalho.js

Responsável por:
- Último Dado
- Atualização da Página
- Hora Atual
=========================================================*/


/*=========================================================
Último Dado
=========================================================*/

function atualizarUltimoDado(
    indicadores
) {

    const elemento =
        document.getElementById(
            "dtProcessamento"
        );


    if (!elemento) {
        return;
    }


    if (
        !Array.isArray(indicadores)
        ||
        indicadores.length === 0
    ) {

        elemento.textContent = "--";

        return;
    }


    /*
        Neste momento temos apenas um indicador.
        Posteriormente poderemos fazer uma busca pela
        maior data entre todos os indicadores.
    */

    const ultimo =
        indicadores[indicadores.length - 1];


    elemento.textContent =
        ultimo?.atualizacao ?? "--";
}


/*=========================================================
Atualização da Página
=========================================================*/

function atualizarDataAtualizacaoPagina() {

    const elemento =
        document.getElementById(
            "dtAtualizacaoPagina"
        );


    if (!elemento) {
        return;
    }


    elemento.textContent =
        formatarDataHora(
            new Date()
        );
}


/*=========================================================
Relógio
=========================================================*/

function atualizarRelogio() {

    const elemento =
        document.getElementById(
            "relogioAtual"
        );


    if (!elemento) {
        return;
    }


    const agora =
        new Date();


    const hora =
        String(
            agora.getHours()
        ).padStart(2, "0");


    const minuto =
        String(
            agora.getMinutes()
        ).padStart(2, "0");


    const segundo =
        String(
            agora.getSeconds()
        ).padStart(2, "0");


    elemento.textContent =
        `${hora}:${minuto}:${segundo}`;
}


/*=========================================================
Inicia relógio
=========================================================*/

function iniciarRelogio() {

    atualizarRelogio();


    setInterval(
        atualizarRelogio,
        1000
    );
}


/*=========================================================
Formatação de data/hora
=========================================================*/

function formatarDataHora(
    data
) {

    const dia =
        String(
            data.getDate()
        ).padStart(2, "0");


    const mes =
        String(
            data.getMonth() + 1
        ).padStart(2, "0");


    const ano =
        data.getFullYear();


    const hora =
        String(
            data.getHours()
        ).padStart(2, "0");


    const minuto =
        String(
            data.getMinutes()
        ).padStart(2, "0");


    const segundo =
        String(
            data.getSeconds()
        ).padStart(2, "0");


    return (
        `${dia}/${mes}/${ano} ` +
        `${hora}:${minuto}:${segundo}`
    );
}