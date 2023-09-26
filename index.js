const xmlToJson = require('./xmlToJson');

xml = "<?xml version=\"1.0\">" +
    "<filmes>" +
    "<filme id=\"1\">" +
    "<titulo>O XML veste prada</titulo>" +
    "<resumo>O filme mostra a elegância da XML na representação de dados estruturados e semi estruturados.</resumo>" +
    "<genero>Aventura</genero>" +
    "<genero>Documentário</genero>" +
    "<elenco>" +
    "<ator>Mark UPlanguage</ator>" +
    "<ator>Mary well-Formed</ator>" +
    "<ator>Sedna D. Atabase</ator>" +
    "</elenco>" +
    "</filme>" +
    "</filmes>"


// LIMPAR TAGS PADRÃO NÃO UTILIZADAS, MANTER SO O BODY DO XML
xml = xml
    .replace(/<\?xml[a-zA-Z0-9\s\:\"\.=]+>/, "") // REMOVE O INICIO "<?XML ...."
    .replace(/<[a-zA-Z0-9:]*\/>/g, "") // REMOVE TAGS SEM VALOR

// CRIAR OBJETO QUE SERA GERADO
const XMLNEW = {
    nodes: xml
}

// CHAMAR FUNCAO
xmlToJson(XMLNEW)

// IMPRIME RESULTADO
console.log(JSON.stringify(XMLNEW))