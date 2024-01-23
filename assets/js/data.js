/* 
    [1] FUNCIONALIDADE : ESSA FUNÇÃO PEGA OS DADOS DO ARQUIVO JSON ONDE ESTÃO ARMAZENADOS OS DADOS DOS SERVIÇOS DA AGENCIA, NESSA FUNÇÃO ESTAMOS PEGANDO OS DADOS E ADICIONANDO NO SELECT DESEJADO. 
      
    [2]DESENVOLVEDOR : THIAGO  DUARTE 
    
    
    
    */
fetch("../LEADHUB_DATA/services.JSON").then((response) => {
  response.json().then((dados) => {
    dados.servicos.map((elemento) => {
      document.getElementById(
        "Interesse"
      ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
    });
  });
});

fetch("../LEADHUB_DATA/responsaveis.JSON").then((response) => {
  response.json().then((dados) => {
    dados.responsavel.map((elemento) => {
      document.getElementById(
        "Resposavel"
      ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
    });
  });
});

fetch("../LEADHUB_DATA/route.JSON").then((response) => {
  response.json().then((dados) => {
    dados.rota.map((elemento) => {
      document.getElementById(
        "route"
      ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
    });
  });
});
// route
