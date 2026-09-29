
/*=========================================================
Projeto : Status X92S
Arquivo : main.js

Responsável por:
- Inicialização da página
- Busca dos dados
- Atualização da tabela
- Atualização do cabeçalho
- Atualização automática
=========================================================*/


/*=========================================================
Configuração
=========================================================*/

const INTERVALO_ATUALIZACAO =
    60 * 1000;


/*=========================================================
Atualização da página
=========================================================*/

async function atualizarPagina() {

    try {

        console.log(
            "Buscando dados do X92S..."
        );


        const dados =
            await buscarDados();


        const indicadores =
            Array.isArray(
                dados.indicadores
            )
                ? dados.indicadores
                : [];


        /*
            Atualiza tabela.
        */

        atualizarTabela(
            indicadores
        );


        /*
            Atualiza último dado.
        */

        atualizarUltimoDado(
            indicadores
        );


        /*
            Registra momento em que a página
            conseguiu atualizar os dados.
        */

        atualizarDataAtualizacaoPagina();


        console.log(
            "Dados carregados:",
            dados
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar dados:",
            erro
        );

    }
}


/*=========================================================
Inicialização
=========================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
            Primeira carga.
        */

        atualizarPagina();


        /*
            Relógio.
        */

        iniciarRelogio();


        /*
            Atualização automática.
        */

        setInterval(

            atualizarPagina,

            INTERVALO_ATUALIZACAO

        );

    }
)