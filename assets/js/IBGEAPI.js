/* 
    [1] FUNCIONALIDADE :PUXA OS DADOS DE UMA API EXTERNA DO IBGE, NESSA FUNÇÃO ESTAMOS PEGANDO O ARQUIVO JSON PRESENTE NA URL E CONVERTENDO EM UM OBJETO, LOGO APÓS ESTAMOS MOSTRANDO EM  UM OPTION
      
    [2]DESENVOLVEDOR : THIAGO  DUARTE 
    
    
    
    */
async function IBGE_API() {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  $.getJSON(url, function (data) {
    $.each(data, function (v, val) {
      $("#uf").append(`<option value="${val.sigla}">${val.sigla}</option>`);
    });
  });
  $("#uf").on("change", () => {
    $("#cidade").html(" ");
    urlCity =
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
      $("#uf").val() +
      "/municipios";
    $.getJSON(urlCity, function (data) {
      $.each(data, function (v, val) {
        $("#cidade").append(`<option value="${val.nome}">${val.nome}</option>`);
      });
    });
  });
}
IBGE_API(); 