/*=========================================================
Projeto : Status X92S
Arquivo : api.js

Responsável por:
- Buscar o arquivo dados.json
- Evitar problemas de cache do navegador
=========================================================*/


/*=========================================================
Configuração
=========================================================*/

const URL_DADOS = "dados/dados.json";


/*=========================================================
Busca dos dados
=========================================================*/

async function buscarDados() {

    /*
        Adicionamos um parâmetro de tempo à URL.

        Exemplo:

            dados/dados.json?ts=1727550000000

        Isso ajuda a evitar que o navegador utilize uma
        versão antiga do JSON armazenada em cache.
    */

    const url = `${URL_DADOS}?ts=${Date.now()}`;


    const resposta = await fetch(
        url,
        {
            cache: "no-store"
        }
    );


    if (!resposta.ok) {

        throw new Error(
            `Erro ao buscar dados.json: ${resposta.status} ${resposta.statusText}`
        );

    }


    return await resposta.json();
}