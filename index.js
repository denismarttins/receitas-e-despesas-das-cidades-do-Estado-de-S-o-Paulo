const fetch = require('node-fetch');
const readlineSync = require('readline-sync');

//This function offer two options to people choose
function receitaDespesa(despesa,receita){
    if (despesa){
        let cidade = readlineSync.question('Digite o nome da cidade: ');
        let ano = readlineSync.question('Digite o ano: ');
        let mes = readlineSync.question('Digite o numero correspondente ao mes: ');
        let url = `https://transparencia.tce.sp.gov.br/api/json/despesas/${cidade}/${ano}/${mes}`;
        let settings = { method: 'Get'};
        fetch(url, settings)
        .then(res =>res.json())
        .then(json =>console.log(json))
    
    }
    else if (receita){
        let cidade = readlineSync.question('Digite o nome da cidade: ');
        let ano = readlineSync.question('Digite o ano: ');
        let mes = readlineSync.question('Digite o numero correspondente ao mes: ');
        let url = `https://transparencia.tce.sp.gov.br/api/json/receitas/${cidade}/${ano}/${mes}`;
        let settings = { method: 'Get'};
        fetch(url, settings)
        .then(res =>res.json())
        .then(json =>console.log(json))

    }
};
let result = receitaDespesa(readlineSync.question('Digite receita ou despesa: '));



