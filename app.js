function pesquisar()
{
    //Obtém a seção HTml onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se campoPesquisa for uma string sem nada 
    if (!campoPesquisa)
    {
        section.innerHTML = "<p>Nada foi emcontrado. Você não digitou o nome de um piloto ou de uma equipe</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    //Inicializa uma string vazia para armazenar os resultados 
    let resuldados = "";
    let titulo = "";
    let descricao = "";


    //Intera sobre cada dado da lista de dados
    for (let dado of dados)
    {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        //Se titulo includes campoPesquisa então faça:
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
            //Cria um novo elemento
            resuldados += `
            <div class = "item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class = "descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Instagram do Leclerc</a>
            </div>`;
        }
    }

    if (!resuldados)
    {
        resuldados = "<p>Nada foi encontrado</p>";
    }

    // Atribiu is resultados gerados à seção HTML
    section.innerHTML = resuldados;
}