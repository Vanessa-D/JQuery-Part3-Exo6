$(function(){
    $("#brown").mouseover(function(){
        $("#text").css("color", "brown")
    });
    $("#burlywood").mouseover(function(){
        $("#text").css("color", "burlywood")
    });
    $("#cadetblue").mouseover(function(){
        $("#text").css("color", "cadetblue")
    });
    $(".color").mouseout(function(){
        $("#text").css("color", "black")
    });
});



// OR
/*
$(function(){
   $(".color").mouseover(function(){
       var divColored = $(this).attr("id"); // Variable qui récupère la valeur de l'attribut id pour chaque div .color
       $("#text").css("color", divColored); // Modification de la couleur du texte suivant l'id ciblé dans la variable
   });

   $(".color").mouseout(function(){
       $("#text").css("color", "black");
   });
});
*/



// en JS vanilla, on aurait :
/*
let text = document.getElementById("text");
let div1 = document.getElementById("d1");
let div2 = document.getElementById("d2");
let div3 = document.getElementById("d3");


div1.addEventListener("mouseover", () => {
    text.style.color = "brown";
});

div2.addEventListener("mouseover", () => {
    text.style.color = "burlywood";
});

div3.addEventListener("mouseover", () => {
    text.style.color = "cadetblue";
});

div1.addEventListener("mouseout", () => {
    text.style.color = "black";
});

div2.addEventListener("mouseout", () => {
    text.style.color = "black";
});

div3.addEventListener("mouseout", () => {
    text.style.color = "black";
});
*/