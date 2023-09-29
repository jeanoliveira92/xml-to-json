const xmlToJson = require('./xmlToJson');

xmlSOAP = '<?xml version="1.0"  encoding="UTF-8"?><soapenv:Envelopexmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Body><ser-root:listarDocumentosResponsexmlns:ser-root=\"http://www.google.com"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><return><colRegistros><codFuncionario>Exemplo</codFuncionario><codIndicadorBoleto>Exemplo</codIndicadorBoleto><codProduto>Exemplo</codProduto><codSetor>Exemplo</codSetor><datEmissaoApolice>Exemplo</datEmissaoApolice><datFimVigencia>Exemplo</datFimVigencia><datInicioVigencia>Exemplo</datInicioVigencia><listaRiscosVigentes><colRiscos><desBairro>Exemplo</desBairro><desCEP>Exemplo</desCEP><desCidade>Exemplo</desCidade><desComplemento>Exemplo</desComplemento><desEndereco>Exemplo</desEndereco><desEstado>Exemplo</desEstado><desTipoItem>Exemplo</desTipoItem><desTipoRisco>Exemplo</desTipoRisco><numEndossoRisco>Exemplo</numEndossoRisco><numResidencia>Exemplo</numResidencia><numRisco>Exemplo</numRisco></colRiscos></listaRiscosVigentes><numApolice>Exemplo</numApolice><numEndosso>Exemplo</numEndosso></colRegistros><colRegistros><codFuncionario>Exemplo</codFuncionario><codIndicadorBoleto>Exemplo</codIndicadorBoleto><codProduto>Exemplo</codProduto><codSetor>Exemplo</codSetor><datEmissaoApolice>Exemplo</datEmissaoApolice><datFimVigencia>Exemplo</datFimVigencia><datInicioVigencia>Exemplo</datInicioVigencia><listaRiscosVigentes><colRiscos><desBairro>Exemplo</desBairro><desCEP>Exemplo</desCEP><desCidade>Exemplo</desCidade><desComplemento>Exemplo</desComplemento><desEndereco>Exemplo</desEndereco><desEstado>Exemplo</desEstado><desTipoItem>Exemplo</desTipoItem><desTipoRisco>Exemplo</desTipoRisco><numEndossoRisco>Exemplo</numEndossoRisco><numResidencia>Exemplo</numResidencia><numRisco>Exemplo</numRisco></colRiscos></listaRiscosVigentes><numApolice>Exemplo</numApolice><numEndosso>Exemplo</numEndosso></colRegistros><colRegistros><codFuncionario>Exemplo</codFuncionario><codIndicadorBoleto>Exemplo</codIndicadorBoleto><codProduto>Exemplo</codProduto><codSetor>Exemplo</codSetor><datEmissaoApolice>Exemplo</datEmissaoApolice><datFimVigencia>Exemplo</datFimVigencia><datInicioVigencia>Exemplo</datInicioVigencia><listaRiscosVigentes><colRiscos><desBairro>Exemplo</desBairro><desCEP>Exemplo</desCEP><desCidade>Exemplo</desCidade><desComplemento>Exemplo</desComplemento><desEndereco>Exemplo</desEndereco><desEstado>Exemplo</desEstado><desTipoItem>Exemplo</desTipoItem><desTipoRisco>Exemplo</desTipoRisco><numEndossoRisco>Exemplo</numEndossoRisco><numResidencia>Exemplo</numResidencia><numRisco>Exemplo</numRisco></colRiscos></listaRiscosVigentes><numDocumento>Exemplo</numDocumento><numEndosso>Exemplo</numEndosso></colRegistros><colRegistros><codFuncionario>Exemplo</codFuncionario><codIndicadorBoleto>Exemplo</codIndicadorBoleto><codProduto>Exemplo</codProduto><codSetor>Exemplo</codSetor><datEmissaoApolice>Exemplo</datEmissaoApolice><datFimVigencia>Exemplo</datFimVigencia><datInicioVigencia>Exemplo</datInicioVigencia><listaRiscosVigentes><colRiscos><desBairro>Exemplo</desBairro><desCEP>Exemplo</desCEP><desCidade>Exemplo</desCidade><desComplemento>Exemplo</desComplemento><desEndereco>Exemplo</desEndereco><desEstado>Exemplo</desEstado><desTipoItem>Exemplo</desTipoItem><desTipoRisco>Exemplo</desTipoRisco><numEndossoRisco>Exemplo</numEndossoRisco><numResidencia>Exemplo</numResidencia><numRisco>Exemplo</numRisco></colRiscos></listaRiscosVigentes><numDocumento>Exemplo</numDocumento><numEndosso>Exemplo</numEndosso></colRegistros><desMensagemErro/><numRetorno>Exemplo</numRetorno></return></ser-root:listarDocumentosResponse></soapenv:Body></soapenv:Envelope>'


// LIMPAR TAGS PADRÃO NÃO UTILIZADAS, MANTER SO O BODY DO XML
xml = xmlSOAP
    .replace(/<\?xml[a-zA-Z0-9\s\:\"\.=]+>/, "") // REMOVE O INICIO "<?XML ...."
    .replace(/<[a-zA-Z0-9:]*\/>/g, "") // REMOVE TAGS SEM VALOR   "<documentos/>"
    // PARA ARQUIVOS SOAP
    .replace(/(<\?xml)[\s\S]*<return>/, "<return>") // REMOVE O INICIO do arquivo do tipo SOAP com chave <return> para inicio do documento
    .replace(/<\/return>[\s\S]*<\/soapenv:Envelope>/, "<\/return>") // REMOVE O FIM do arquivo do tipo SOAP


// CHAMAR FUNCAO
const jsonXML = xmlToJson(xml)

// IMPRIME RESULTADO
console.log(JSON.stringify(jsonXML))