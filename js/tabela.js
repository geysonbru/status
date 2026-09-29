/*=========================================================
Projeto : Status X92S
Arquivo : tabela.js

Responsável por:
- Montar a tabela de indicadores
=========================================================*/


/*=========================================================
Atualiza a tabela
=========================================================*/

function atualizarTabela(indicadores) {

    const tbody = document.getElementById(
        "tbodyIndicadores"
    );


    if (!tbody) {

        console.error(
            "Elemento tbodyIndicadores não encontrado."
        );

        return;
    }


    /*
        Limpa as linhas existentes antes de recriar
        a tabela.
    */

    tbody.innerHTML = "";


    /*
        Verifica se recebemos indicadores.
    */

    if (
        !Array.isArray(indicadores)
        ||
        indicadores.length === 0
    ) {

        const linha = document.createElement(
            "tr"
        );


        const celula = document.createElement(
            "td"
        );


        celula.colSpan = 3;

        celula.textContent =
            "Nenhum indicador disponível.";


        linha.appendChild(
            celula
        );


        tbody.appendChild(
            linha
        );


        return;
    }


    /*
        Cria uma linha para cada indicador.
    */

    indicadores.forEach(
        indicador => {

            const linha = document.createElement(
                "tr"
            );


            /*------------------------------------------------
            Nome
            ------------------------------------------------*/

            const celulaNome = document.createElement(
                "td"
            );

            celulaNome.textContent =
                indicador.nome ?? "-";


            /*------------------------------------------------
            Descrição
            ------------------------------------------------*/

            const celulaDescricao = document.createElement(
                "td"
            );

            celulaDescricao.textContent =
                indicador.descricao ?? "-";


            /*------------------------------------------------
            Atualização
            ------------------------------------------------*/

            const celulaAtualizacao = document.createElement(
                "td"
            );

            celulaAtualizacao.textContent =
                indicador.atualizacao ?? "-";


            /*------------------------------------------------
            Monta a linha
            ------------------------------------------------*/

            linha.appendChild(
                celulaNome
            );

            linha.appendChild(
                celulaDescricao
            );

            linha.appendChild(
                celulaAtualizacao
            );


            /*------------------------------------------------
            Adiciona à tabela
            ------------------------------------------------*/

            tbody.appendChild(
                linha
            );
        }
    );
}