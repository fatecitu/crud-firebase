/**
 * Obtém o CEP na API BrasilAPI
 * @param {string} cep - O CEP que será consultado
 * @param {function} callback - retorno da consulta
 */
function getCEP(cep, callback){
    let url = `https://brasilapi.com.br/api/cep/v2/${cep}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //verifica se o retorno contém a propriedade cep
        if('cep' in data){
            let result = data
            let endereco = `${result.street}, ${result.neighborhood}, ${result.city}-${result.state}`
            callback(null, endereco)
        } else {
            callback('Não foi possível obter o cep', null)
        }
    })
    .catch(error =>{
        callback(error, null)
    })
}