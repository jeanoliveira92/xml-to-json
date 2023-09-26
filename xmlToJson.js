function convertToJson(o) {

    // ENCONTRANDO NOS E PEGANDO O PRIMEIRO
    const nodeSearch = o.nodes.match(/<[a-zA-Z0-9:\"\s\.=]*>/)

    if (!nodeSearch) return o.nodes;

    // SELECIONAR A TAG QUE ABRE E REMOVE IDS SE HOUVER
    const nodeIn = nodeSearch[0].slice(0, -1).split(" ")[0] + ">"

    if (nodeIn) {
        const nodeOut = o.nodes.match(new RegExp(nodeIn.slice(0, 1) + '/' + nodeIn.slice(1)))

        console.log("HAUehuAEUAE", nodeIn, nodeOut)
        const left = o.nodes.slice(0 + nodeIn.length, nodeOut.index);
        const right = nodeOut ? o.nodes.slice(nodeOut.index + (nodeOut ? nodeOut[0].length : 0)) : false

        /* OBJETO */
        delete o.nodes;

        const nodeName = nodeIn.slice(1, -1);

        if (left)
            o[nodeName] = convertToJson({ nodes: left })

        if (right) {
            temp = convertToJson({ nodes: right })

            if (temp) {
                const keyValue = Object.keys(temp)[0]

                if (keyValue == nodeName) {
                    const tempCopy = o[nodeName];

                    if (Array.isArray(tempCopy) && Array.isArray(temp[keyValue]))
                        o[nodeName] = [...tempCopy, ...temp[keyValue]]

                    else if (Array.isArray(tempCopy))
                        o[nodeName] = [...tempCopy, temp[keyValue]]

                    else if (Array.isArray(temp[keyValue]))
                        o[nodeName] = [tempCopy, ...temp[keyValue]]

                    else
                        o[nodeName] = [tempCopy, temp[keyValue]]

                } else {
                    o = { ...o, ...temp }
                }
            }
        }
    }


    return o
}

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

xml = xml
    .replace(/<\?xml[a-zA-Z0-9\s\:\"\.=]+>/, "") // REMOVE O INICIO "<?XML ...."
    .replace(/<[a-zA-Z0-9:]*\/>/g, "") // REMOVE TAGS SEM VALOR

XMLNEW = {
    nodes: xml
}

convertToJson(XMLNEW)