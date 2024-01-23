const areaLead = { 
  /* 
  OBJETO - DAS ÁREAS DE DROP
  */
  AreaNaoContatado: () => document.getElementById("noContato"),
  AreaContatado: () => document.getElementById("contatado"),
  AreaVendido: () => document.getElementById("vendido"),
  AreaPosVenda: () => document.getElementById("pos-venda"),
  Lead: () => document.getElementsByClassName("lead"),
}; 

const NoContatBD = "NO-Contatados"; 
const ContatDB = "Contatados"; 
const vendidosDB = "Vendidos"; 
const posVendaDB = "Pos-Venda";


let leads = areaLead.Lead();
 

for (lead of leads) { 
  /*
  CRIANDO UMA ESTRUTURA DE REPETIÇÃO.  
  NESTA ESTRUTURA DE REPETIÇÃO, VAMOS PUXAR OS DADOS DO LOCAL STORAGE 
  
  */ 
  lead.addEventListener("dragstart", (e) => {
    let selected = e.target;
    areaLead.AreaContatado().addEventListener("dragover", (e) => { 
      e.preventDefault();
    });
    areaLead.AreaContatado().addEventListener("drop", () => { 
      let ContactDb = JSON.parse(localStorage.getItem(ContatDB) || "[]");  
      ContactDb.push(selected) 
      localStorage.setItem(ContatDB, JSON.stringify(ContactDb)); 

      areaLead.AreaContatado().appendChild(selected); 
      selected = null;
      
    });
    areaLead.AreaNaoContatado().addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    areaLead.AreaNaoContatado().addEventListener("drop", () => {
      areaLead.AreaNaoContatado().appendChild(selected);
      selected = null;
    });
    areaLead.AreaVendido().addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    areaLead.AreaVendido().addEventListener("drop", () => {
      areaLead.AreaVendido().appendChild(selected);
      selected = null;
    });
    areaLead.AreaPosVenda().addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    areaLead.AreaPosVenda().addEventListener("drop", () => {
      areaLead.AreaPosVenda().appendChild(selected);
      selected = null;
    });
  });
}
