function convertToJson(o) {
    // ENCONTRANDO NOS E PEGANDO O PRIMEIRO
    const nodeSearch = o.nodes.match(/<[a-zA-Z0-9:]*>/)

    if (!nodeSearch) {
        return o.nodes;
    }

    const nodeIn = nodeSearch[0]

    if (nodeIn) {
        const nodeOut = o.nodes.match(new RegExp(nodeIn.slice(0, 1) + '/' + nodeIn.slice(1)))


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

convertToJson(XMLNEW)