
const search = {
    button: () => document.getElementById("button-search"), 
    bar: () => document.getElementById("Search-bar"),  

}  
const table = {
    lines: () => document.getElementsByClassName("lead-line"), 
    coluns: () => document.getElementsByTagName("td"), 
}
search.bar().addEventListener("keyup", () => {  
    let expression = search.bar().value; 
    for (let i in table.lines()) {
        if (true === isNaN(i)) {
            continue; 
        } 
        let content = table.lines()[i].innerHTML;  
        if (true == content.includes(expression)) {
            table.lines()[i].style.display = ""; 
        } else {
            table.lines()[i].style.display = "none"; 
        }
    }
})
 

$("#new-Lead").click(() => {
    $(".register").fadeIn(200);
    $(".content").addClass("desfoque");
    $(".close").click(function () {
      $(".register").fadeOut(200);
      $(".content").removeClass("desfoque");
    });
}); 
 
$("#sellflux-btn").click(() => {
    $(".sellflux").show(200)
}) 
$("#close3").click(() => {
    $(".sellflux").hide(200)
});  

$("#popup-btn").click(() => {
    $("#edit-popup").hide(); 
    $("#form-body").removeClass("desfoque"); 
})