async function tempo(request, response){
    const dynamicDate = new Date();
    console.log(request.query['estado'])

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${request.query['estado']}/municipios`

    const estadosResponse = await fetch(url)
    const estadosResponseJson = await estadosResponse.json()
    const quantidade = estadosResponseJson.length
    

    response.json({
        date: dynamicDate.toTimeString(),
        quantidade: quantidade
        
    });
}

export default tempo;