function resultadoBuscaCep(dadosDoCep){
    for(let input in dadosDoCep){
        if(document.querySelector(`#${input}`)){
        document.querySelector(`#${input}`).value = dadosDoCep[input];
        }
    }
}
let dadosDoCep = async function (numeroCep){
    let link = `https://viacep.com.br/ws/${numeroCep}/json/`;
    try {
        let dadosFetch = await fetch(link);
        let dadosJson = await dadosFetch.json();
        resultadoBuscaCep(dadosJson);
    }catch(error){
        alert(error);
    }
}

export{resultadoBuscaCep,dadosDoCep};