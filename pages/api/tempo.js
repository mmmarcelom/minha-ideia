async function tempo(request, response){
    const dynamicDate = new Date();
    const apiSecret = process.env.CONVERTKIT_API_SECRET

    const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios")
    const estadosResponseJson = await estadosResponse.json()
    const quantidade = estadosResponseJson.length
    

    response.json({
        date: dynamicDate.toTimeString(),
        quantidade: quantidade,
        teste: apiSecret
        
    });
}

export default tempo;