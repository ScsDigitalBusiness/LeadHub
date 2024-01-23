function LeadElement(
  /* 
CRIADOR : THIAGO DUARTE

Functionalidade: 
FUNÇÃO QUE CRIA  O ELEMENTO HTML DAS LEADS.   


Última Modificação : 15/01/2024 
*/
  nome,
  email,
  tell,
  uf,
  cidade,
  classfic,
  nicho,
  interesse,
  i,
  callback
) {
  $("#tabela-leads").append(` <tr class= "lead-line" id="lead-${i}" > 
    <td id="id-lead">${i + 1}</td>
    <td id="nome-lead"><div class="lead-img">
      <img src="assets/utilites/user.png" alt="">
    </div>  ${nome}</td>
    <td id="mail-lead"> ${tell}</td>
    <td id="tell" >${email}</td>
    <td id="more-lead" >
     <button id ="more-btn${i}" class="more-btn more-${i}">
        <img src="assets/utilites/more.svg" alt="" />
      </button> 
    <!--informações ao cliclaar -->
   
  </div>  
  
  <div class="more-leads-area area-${i}"> 
  <div class = "more-area">
    <div class="close2 close-${i}">
      <img src="assets/utilites/close.svg" alt="" />
    </div>
    <div class="simple-lead-info">
      <div class="lead-img-more">
        <img src="assets/utilites/user.png" alt="" />
      </div>
      <div class="contact-infos">
        <div class="lead-id-more">
          <p id="lead-id">ID : <span>${i + 1}</span></p>
        </div>
        <div class="lead-name-more">
          <p id="lead-name">Nome : <span>${nome}</span></p>
        </div>
        <div class="lead-tel-more">
          <p class="lead-tel">Tel: <span>${tell}</span></p>
        </div>
        <div class="lead-mail-more">
          <p id="lead-mail">
            E-mail: <span>${email}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="lead-local-infos-more">
    <div class="lead-uf-more">
    <p id="lead-uf">UF : <span id="estado_status" >${uf}</span></p>
   </div>
  <div class="lead-cidade-more">
    <p id="lead-cidade">
      Cidade : <span id="cidade_status" >${cidade}</span>
    </p>
  </div>
  <div class="lead-type-more">
    <p id="lead-type">
      Tipo : <span id="lead_type_status" >${classfic}</span>
    </p>
  </div>
  <div class="lead-nicho-more">
    <p id="lead-nicho">
      Nicho : <span id="lead-nicho_status" >${nicho}</span>
    </p>
  </div>
  <div class="lead-interess-more">
    <p id="lead-interess">
      Interesse : <span id="interesse_status" >${interesse}</span>
    </p>
  </div>
 </div> 
</div>
</div>
  </td>  
  </tr>`);
  callback(i);
}

function moreInfos(i) {
  /* 
CRIADOR : THIAGO DUARTE

Funcionalidade: 
FUNÇÃO UTILIZADA COMO CALLBACK PARA MOSTRAR AS INFORMAÇÕES RESTANTES SOBRE A LEAD. 

Última Modificação : 15/01/2024
  */
  $("#more-btn" + i).click(() => {
    $(".area-" + i).show(300);
    $(".lead-body").addClass("desfoque");
    $(".close-" + i).click(() => {
      $(".area-" + i).hide(300);
      $(".lead-body").removeClass("desfoque");
    });
  });
}

let db = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
for (let i = 0; i < db.length; i++) {
  LeadElement(
    db[i]["nome"],
    db[i]["tell"],
    db[i]["email"],
    db[i]["uf"],
    db[i]["cidade"],
    db[i]["classfic"],
    db[i]["nicho"],
    db[i]["interesse"],
    i,
    moreInfos
  );

  if (i % 2 == 0) {
    $("#lead-" + i).css("background-color", "#eeeeee");
  } else {
    $("#lead-" + i).css("background-color", "#f5f5f5");
  }
}
