const localStorageKey = "user-dados";
const LocalIMG = "user-img";

let reader, profileImage, inputFile;
profileImage = document.getElementById("user-foto");
inputFile = document.getElementById("upload-img");
inputFile.onchange = () => {
  profileImage.src = URL.createObjectURL(inputFile.files[0]);
  reader = new FileReader();
  reader.readAsDataURL(inputFile.files[0]);
  reader.addEventListener("load", () => {
    const url = reader.result;
    window.localStorage.setItem(LocalIMG, url);
  });
};
let nome, empresa, departamento;
$(".btn").click(function () {
  let db = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  nome = $("#nome").val();
  empresa = $("#empresa").val();
  departamento = $("#dep").val();
  db = [
    {
      nome: nome,
      dep: departamento,
      empresa: empresa,
    },
  ];

  localStorage.setItem(localStorageKey, JSON.stringify(db));
});
function MOSTRADADOS() {
  let db = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let profileImage = localStorage.getItem(LocalIMG);
  document.getElementById("user-foto").src = profileImage;
  for (let i = 0; i < db.length; i++) {
    $("#nome").val(db[i]["nome"]);
    $("#dep").val(db[i]["dep"]);
    $("#empresa").val(db[i]["empresa"]);
  }
}
function showUserDados() {
  let db_LocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );
  let profileImage = localStorage.getItem(LocalIMG);
  document.getElementById("user-foto2").src = profileImage;

  for (let i = 0; i < db_LocalStorage.length; i++) {
    $(".name_user").html(db_LocalStorage[i]["nome"]);
  }
}
showUserDados();
MOSTRADADOS();
