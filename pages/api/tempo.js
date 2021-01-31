function tempo(request, response){
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toTimeString()
    });
}

export default tempo;