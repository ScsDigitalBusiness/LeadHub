let dbInteress = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
let trafegoCount,
  assessoriaCount,
  SiteCount,
  DesignCount,
  RedesCount,
  videosCount,
  AcionamentosCount,
  AutomationCount,
  MeuNegocioCount,
  EcommerceCount,
  INPIcount;
trafegoCount = 0;
assessoriaCount = 0;
SiteCount = 0;
DesignCount = 0;
RedesCount = 0;
videosCount = 0;
AcionamentosCount = 0;
AutomationCount = 0;
MeuNegocioCount = 0;
EcommerceCount = 0;
INPIcount = 0;

for (let i = 0; i < dbInteress.length; i++) {
  if (dbInteress[i]["interesse"] == "Tráfego Pago") {
    trafegoCount++;
  } else {
    if (dbInteress[i]["interesse"] == "Acessoria e Acompanhamento") {
      assessoriaCount++;
    } else {
      if (dbInteress[i]["interesse"] == "Criação de Sites") {
        SiteCount++;
      } else {
        if (dbInteress[i]["interesse"] == "Designer") {
          DesignCount++;
        } else {
          if (dbInteress[i]["interesse"] == "Gestão de Redes") {
            RedesCount++;
          } else {
            if (dbInteress[i]["interesse"] == "Videos") {
              videosCount++;
            } else {
              if (dbInteress[i]["interesse"] == "Acionamentos") {
                AcionamentosCount++;
              } else {
                if (dbInteress[i]["interesse"] == "Automação de Atendimento") {
                  AutomationCount++;
                } else {
                  if (dbInteress[i]["interesse"] == "Google Meu Nogócio") {
                    MeuNegocioCount++;
                  } else {
                    if (dbInteress[i]["interesse"] == "E-commerce") {
                      EcommerceCount++;
                    } else {
                      if (
                        dbInteress[i]["interesse"] == "Registro de Marca (INPI)"
                      ) { 
                          INPIcount++; 
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

const ctx3 = document.getElementById("donout");

  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: [
        "Tráfego Pago",
        "Acessoria e Acompanhamento",
        "Criação de Sites",
        "Designer",
        "Gestão de Redes",
        "Videos",
        "Acionamentos",
        "Automação de Atendimento",
        "Google Meu Nogócio",
        "E-commerce",
        "Registro de Marca (INPI)",
      ],
      datasets: [
        {
          label: "Leads Cadastradas ",
          data: [
           trafegoCount,assessoriaCount,SiteCount,DesignCount,RedesCount,videosCount,AcionamentosCount,AutomationCount,
          ],
          borderWidth: 1, 
          backgroundColor: [
            "#41BDD9", 
          ],  
          borderColor: "#41BDD9", 
        },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });