const KeyLocal = "lead-info";

const formElement = {
  /* OBJETO DO FORMULÁRIO. 
   CRIAMOS UM OBJETO DO FORMULÁRIO. 
  */

  nomeInput: () => document.getElementById("nome"),
  errorName: () => document.getElementById("nameError"),
  tellInput: () => document.getElementById("tel"),
  errorTell: () => document.getElementById("tellError"),
  EmailInput: () => document.getElementById("mail"),
  errorEmail: () => document.getElementById("errorEmail"),
  UfInput: () => document.getElementById("uf"),
  CidadeInput: () => document.getElementById("cidade"),
  TypeInput: () => document.getElementById("tipo_lead"),
  NichoInput: () => document.getElementById("nicho"),
  InteresseInput: () => document.getElementById("Interesse"),
  ResponsavelInput: () => document.getElementById("Responsavel"),
  DataInput: () => document.getElementById("Data"),
  Button: () => document.getElementById("register-btn"),
};
function errorMensage(mensage, element, locked) {
  // FUNÇÃO DE EXIBIÇÃO DE ERRO
  /*
  NESTA FUNÇÃO, RECEBEMOS 3 PARÂMETROS: 
  
  1-MENSAGEM QUE SERÁ EXIBIDA. 
  2-ELEMENTO QUE SERÁ MODIFICADO. 
  3- ELEMENTO QUE SERÁ MODIFICADO. 

  O ELEMENTO LOCKED É BLOQUEADO. 
  OUTRO EELEMTO QUE É PASSADO COMO PARÂMETRO  RECEBE OS ESTILOS 
  NO SEGUNDO PASSO, O MESMO ELEMENTO RECEBE A MENSAGEM QUE É PASSADA COMO PARÂMETRO. 
  */
  locked.setAttribute("disabled", "disabled");
  element.style.display = "block";
  element.innerHTML = mensage;
}

function ValidationName(Name) {
  /* FUNÇÃO DE VALIDAÇÃO DE NOME.
   
   NESSA FUNÇÃO UM NOME É PASSADO COMO PARÂMETRO. 
   UTILIZAMOS UMA EXPRESSÃO REGULAR PARA FAZER A VALIDAÇÃO DE NOMES. 
   CASO TENHA UM NÚMERO, IRÁ APONTAR UM ERRO NO ELEMENTO QUE FOI APONTADO PARA AVISO.
  
  */
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  const result = regex.test(Name);
  if (!result) {
    formElement.nomeInput().style.borderBottom = "2px solid red";
    errorMensage(
      "Insira um nome Válido! ",
      formElement.errorName(),
      formElement.Button()
    );
  } else {
    formElement.Button().removeAttribute("disabled", "disabled");
    formElement.nomeInput().style.borderBottom = "2px solid green";
    formElement.errorName().style.display = "none";
  }
}

function ValidationEmail(email) {
  /*
   VALIDAÇÃO DE E-MAIL
 
    NESTA FUNÇÃO A FUNÇÃO RECEBE UM E-MAIL COMO PARÂMETRO. 
    É UTILIZADO UMA EXPRESSÃO REGULAR PARA FAZER A  VALIDAÇÃO DESTE E-MAIL. 
    
    1 - CASO  A VERIFICAÇÃO RETORNE  TRUE FICARÁ VERDE, CASO NÃO FICARÁ 
    VERMELHO E APARECERÁ UMA MENSAGEM DE ERRO. 
   */
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const test = regex.test(email);
  if (!test) {
    formElement.EmailInput().style.borderBottom = "2px solid red";
    errorMensage(
      "Insira um E-mail Válido!",
      formElement.errorEmail(),
      formElement.Button()
    );
  } else {
    formElement.Button().removeAttribute("disabled", "disabled");
    formElement.EmailInput().style.borderBottom = "2px solid green";
    formElement.errorEmail().style.display = "none";
  }
}

function ValidationTell(tell) {
  /* 
  FUNÇÃO DE VALIDAÇÃO DE  TELEFONE 
  
  NESTA FUNÇÃO  RECEBEMOS UM NÚMERO DE TELEFONE COMO PARÂMETRO. 
  UTILIZAMOS UMA EXPRESSÃO REGULAR PARA FAZER A VERIFICAÇÃO SE  É UM NÚMERO VÁLIDO. 
  1- CASO NÃOS SEJA UM NÚMERO CORRETO, MOSTRARÁ UM ERRO  E UMA MENSAGEM COMO AVISO DE ERRO PARA O USUÁRIO. 
 
  */
  $(formElement.tellInput()).mask("(00) 0000-0000");
  const regex = /^\(\d{2}\) \d{4}-\d{4}$/;
  const test = regex.test(tell);
  if (!test) {
    formElement.tellInput().style.borderBottom = "2px solid red";
    errorMensage(
      "Insira um número Válido !",
      formElement.errorTell(),
      formElement.Button()
    );
  } else {
    if (test === true) {
      formElement.Button().removeAttribute("disabled", "disabled");
      formElement.tellInput().style.borderBottom = "2px solid green";
      formElement.errorTell().style.display = "none";
    }
  }
}

$(formElement.EmailInput()).keyup((e) => {
  /*ATIVANDO AS FUNÇÕES */
  ValidationEmail(formElement.EmailInput().value);
});

$(formElement.tellInput()).keyup((e) => {
  /*ATIVANDO AS FUNÇÕES */
  ValidationTell(formElement.tellInput().value);
});

$(formElement.nomeInput()).keyup((e) => {
  /*ATIVANDO AS FUNÇÕES */
  ValidationName(formElement.nomeInput().value);
});
