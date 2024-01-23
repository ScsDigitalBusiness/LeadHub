//area de variáveis
/*
USAMOS CONSTS PARA DEFINIR A CHAVE DO LOCALSTORAGE PARA SALVAR OS DADOS QUE PRECISAMOS
*/
const LocalIMG = "user-img";
const LocalStorageKey = "lead-info";
const localStorageKey = "user-dados";

const form = {
  nomeInput: () => document.getElementById("nome"),
  tellInput: () => document.getElementById("tel"),
  EmailInput: () => document.getElementById("mail"),
  UfInput: () => document.getElementById("uf"),
  CidadeInput: () => document.getElementById("cidade"), 
  TypeInput: () => document.getElementById("tipo_lead"),  
  LeadTemperatureInput: () => document.getElementById("Qualification"),
  NichoInput: () => document.getElementById("nicho"), 
  InteresseInput: () => document.getElementById("Interesse"), 
  ResponsavelInput: () => document.getElementById("Responsavel"), 
  DataInput: () => document.getElementById("Data"),  
  Button: ()=> document.getElementById("register-btn")
}; 


//VARIÁVEIS USADAS PARA COLETAR OS DADOS DO FORMS
let nome, tell, mail, uf, cidade, tipo_lead, nicho, interesse;

//VARIÁVEIS PARA PEGAR DATAS

let Ano_Cadastro = new Date();
let Mes_cadastro = new Date();
let Day_Cadastro = new Date();
function showUserDados() {
  /* 
  [1] FUNCIONALIDADE : ESSA FUNÇÃO PEGA OS DADOS REGISTRADOS NA PÁGINA DE SETTINGS  E MOSTRA ESSES DADOS PARA O USUÁRIO NO HEADER DA APLICAÇÃO 
    
  [2]DESENVOLVEDOR : THIAGO  DUARTE 
  */

  let db_LocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );
  let profileImage = localStorage.getItem(LocalIMG);
  document.getElementById("user-foto").src = profileImage;
  for (let i = 0; i < db_LocalStorage.length; i++) {
    $(".name-user").html(db_LocalStorage[i]["nome"]);
  }
}



$(form.Button()).click(() => {
  
  let db_leads = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
  Ano_Cadastro = Ano_Cadastro.getUTCFullYear();
  Mes_cadastro = Mes_cadastro.getMonth();
  Day_Cadastro = Day_Cadastro.getDay();
  nome = form.nomeInput().value;
  tell = form.tellInput().value;
  mail = form.EmailInput().value;
  uf = form.UfInput().value;
  cidade = form.CidadeInput().value;
  tipo_lead = form.TypeInput().value;
  qualification = form.LeadTemperatureInput().value; 
  nicho = form.NichoInput().value;
  interesse = form.InteresseInput().value; 

  
  // VERIFICADADOS(processo, tipoMaterial, material, cidade, uf);

  db_leads.push({
    nome: nome,
    tell: tell,
    email: mail,
    uf: uf,
    cidade: cidade,
    Type: tipo_lead, 
    classfic : qualification, 
    nicho: nicho,
    interesse: interesse,
    Year: Ano_Cadastro,
    Month: Mes_cadastro,
    Day: Day_Cadastro,
  });
  localStorage.setItem(LocalStorageKey, JSON.stringify(db_leads)); 
  
})

  

//QUANDO O BOTÃAO DE REGISTRAR OUTRA LEAD FOR CLICADO, EXECUTARÁ ESSE BLOCO



//ATIVANDO AS FUNÇÕES


showUserDados();
