let db = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]"); 

let countFria, countQuente, countPosMeeting; 
countFria = 0; 
countQuente = 0; 
countPosMeeting = 0; 

for (let i = 0; i < db.length; i++) {
    if (db[i]["classfic"] == "Fria") {
        countFria++;         
    } else {
        if (db[i]["classfic"] == "Quente") {
            countQuente++; 
        } else {
            if (db[i]["classfic"] == "Pos Meeting") {
                countPosMeeting++; 
            }
        }
    }
}  
const ctx4 = document.getElementById("polar");

  new Chart(ctx4, {
    type: "doughnut",
    data: {
      labels: [
        "Fria",
        "Quente",
        "Pós Meeting",
        
      ],
      datasets: [
        {
          label: "Contagem por Classificação",
          data: [countFria, countQuente, countPosMeeting],
          borderWidth: 1, 
          backgroundColor: [
            "#41BDD9",
            "#1F2373", 
            "#343BBF", 
          ],  
          borderColor: "black",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }, 

  });

