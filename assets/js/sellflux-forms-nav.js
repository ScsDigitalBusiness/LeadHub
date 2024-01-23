const formArea = { 
  titleForm: () => document.getElementById("sellFlux-title"), 
  buttonFria: () => document.getElementById("chill"),
  buttonMeeting: () => document.getElementById("meeting"),
  areaForms: () => document.getElementById("forms-area-sellflux"),
  formElement: () => document.getElementById("sellflux-form"),
  meetingForm: () => document.getElementById("meeting-form"),
};

const FormMeetingElement = `<form method="post" id ="meeting-form" action="https://webhook.sellflux.com/webhook/v2/form/lead/c0d96addd9586c3e7db70766763ba310?not_query=true&redirect_url=https%3A%2F%2Fleadhubscs.netlify.app%2F">
<div style="margin-bottom:1rem;">
          <input type="text" id="name" name="name" value="" placeholder="Insira seu nome" style="display:block; width:100%; padding:.375rem .75rem; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background-color:#fff; border:1px solid #ced4da; border-radius:.25rem;" />
      </div>
      <div style="margin-bottom:1rem;" class="form-group">
          <input type="text" id="email" name="email" value="" placeholder="Insira seu melhor e-mail" required style="display:block; width:100%; padding:.375rem .75rem; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background-color:#fff; border:1px solid #ced4da; border-radius:.25rem;" />
      </div>
      <div style="margin-bottom:1rem;" class="form-group">
          <input type="tel" id="tel" name="phone" maxlength="15" placeholder="WhatsApp: (00) 00000-0000" required style="display:block; width:100%; padding:.375rem .75rem; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background-color:#fff; border:1px solid #ced4da; border-radius:.25rem;" />
      </div>
      <input type="submit" value="CONTINUAR" style="display:inline-block; line-height:1.5; text-align:center; text-decoration:none; vertical-align:middle; cursor:pointer; font-size:1rem; width:100%; margin-top: 9px; font-weight: 700; text-transform: uppercase; text-shadow: 0 0 2px rgb(0 0 0 / 80%); padding: 13px; background-color: #16b763; color: #fff; border-radius: 15px 15px 15px 15px; box-shadow: 0 -1px 24px 0 #16b763; border:1px solid transparent">
<script type="text/javascript">
    const tt = document.querySelectorAll("#tel");
    for (var i = 0; i < tt.length; i++) {
        let tel = tt[i]
        let mascaraTelefone = (valor) => {
            valor = valor.replace(/\D/g, "")
            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
            valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
            tel.value = valor
        }
        tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
        tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))
    }
</script>
</form>`;

const ChillFormElement = `<form
id="sellflux-form"
method="post"
action="https://webhook.sellflux.com/webhook/v2/form/lead/acf5f6c0f191807cf4e35ca95fd9a486?not_query=true&redirect_url=https%3A%2F%2Fleadhubscs.netlify.app%2F"
>
<div style="margin-bottom: 1rem">
  <input
    type="text"
    id="name"
    name="name"
    value=""
    placeholder="Insira seu nome"
    style="
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    "
  />
</div>
<div style="margin-bottom: 1rem" class="form-group">
  <input
    type="text"
    id="email"
    name="email"
    value=""
    placeholder="Insira seu melhor e-mail"
    required
    style="
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    "
  />
</div>
<div style="margin-bottom: 1rem" class="form-group">
  <input
    type="tel"
    id="tel"
    name="phone"
    maxlength="15"
    placeholder="WhatsApp: (00) 00000-0000"
    required
    style="
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    "
  />
</div>
<input
  type="submit"
  value="CONTINUAR"
  style="
    display: inline-block;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    margin-top: 9px;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 0 2px rgb(0 0 0 / 80%);
    padding: 13px;
    background-color: #16b763;
    color: #fff;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0 -1px 24px 0 #16b763;
    border: 1px solid transparent;
  "
/>
<script type="text/javascript">
  const tt = document.querySelectorAll("#tel");
  for (var i = 0; i < tt.length; i++) {
    let tel = tt[i];
    let mascaraTelefone = (valor) => {
      valor = valor.replace(/\D/g, "");
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
      tel.value = valor;
    };
    tel.addEventListener("keypress", (e) =>
      mascaraTelefone(e.target.value)
    );
    tel.addEventListener("change", (e) =>
      mascaraTelefone(e.target.value)
    );
  }
</script>
</form>`;
formArea.areaForms().innerHTML += ChillFormElement;

function ShowColdLeadForm() { 
  formArea.titleForm().innerText= "Cadastrar Lead Fria SellFlux"
  formArea.meetingForm().remove();
  formArea.areaForms().innerHTML += ChillFormElement;
  formArea.buttonFria().style.backgroundColor = "rgb(39, 39, 39)";
  formArea.buttonFria().style.color = "white";
  formArea.buttonMeeting().style.backgroundColor = "white";
  formArea.buttonMeeting().style.color = "black";
}

function ShowPosMeetingForm() {
  formArea.titleForm().innerText= "Cadastrar Pós Meeting SellFlux"
  formArea.formElement().remove();
  formArea.areaForms().innerHTML += FormMeetingElement;
  formArea.buttonMeeting().style.backgroundColor = "rgb(39, 39, 39)";
  formArea.buttonMeeting().style.color = "white";
  formArea.buttonFria().style.backgroundColor = "white";
  formArea.buttonFria().style.color = "black";
}
