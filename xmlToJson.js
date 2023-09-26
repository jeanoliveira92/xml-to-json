const xmlToJson = (o) => {

    // ENCONTRANDO NOS E PEGANDO O PRIMEIRO
    const nodeSearch = o.nodes.match(/<[a-zA-Z0-9:\"\s\.=]*>/)

    // NÃO POSSUI FILHOS, É ATRIBUTO
    if (!nodeSearch) return o.nodes;

    // SELECIONAR A TAG QUE ABRE E REMOVE IDS SE HOUVER
    const nodeIn = nodeSearch[0].slice(0, -1).split(" ")[0] + ">"

    if (nodeIn) {
        // SELECIONA TAG DE FECHAMENTO
        const nodeOut = o.nodes.match(new RegExp(nodeIn.slice(0, 1) + '/' + nodeIn.slice(1)))

        // SELECIONA TAG E TODOS OS FILHOS
        const left = o.nodes.slice(0 + nodeIn.length, nodeOut.index);
        // SELECIONA O RESTANTE NÂO SELECIONADO
        const right = nodeOut ? o.nodes.slice(nodeOut.index + (nodeOut ? nodeOut[0].length : 0)) : false

        // DELETA OS NOS PASSADOS
        delete o.nodes;

        // SALVA O NOME DO OBJETO ATUAL
        const nodeName = nodeIn.slice(1, -1);

        // RECURSIVIDADE PRA ESQUERDA
        if (left)
            o[nodeName] = xmlToJson({ nodes: left })

        // RECURSIVIDADE PRA DIREITA
        if (right) {
            leftChildren = xmlToJson({ nodes: right })

            // SE RETORNOU CHAVES
            if (leftChildren) {
                // PEGA O OBJETO ROOT
                const rootLeftKey = Object.keys(leftChildren)[0]

                // VERIFICA SE O OBJETO ROOT É O MESMO QUE O DA RECURSIVIDADE ESQUERDA
                // SE ELE É IGUAL, NÃO SE TRATA DE UM OBJETO, MAS DE UM VETOR, AI CONVERTE PRA VETOR
                if (rootLeftKey == nodeName) {
                    const tempCopy = o[nodeName];

                    if (Array.isArray(tempCopy) && Array.isArray(leftChildren[rootLeftKey]))
                        o[nodeName] = [...tempCopy, ...leftChildren[rootLeftKey]]

                    else if (Array.isArray(tempCopy))
                        o[nodeName] = [...tempCopy, leftChildren[rootLeftKey]]

                    else if (Array.isArray(leftChildren[rootLeftKey]))
                        o[nodeName] = [tempCopy, ...leftChildren[rootLeftKey]]

                    else
                        o[nodeName] = [tempCopy, leftChildren[rootLeftKey]]

                    // SE O OBJETO ROOT NÃO É IGUAL, ENTÃO O RETONO É ATRIBUTOS
                } else {
                    o = { ...o, ...leftChildren }
                }
            }
        }
    }


    return o
}


module.exports = xmlToJson;