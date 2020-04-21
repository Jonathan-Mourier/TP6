function tiret(){
    console.log("------------------------")
}

function main(){
    tiret();
    console.log("Titre de la page : "+document.title);
    console.log("Type du contenu de la page :"+typeof(document.body));
    console.log("La troisième bande annonce est : "+document.links[2]);
    tiret();
    console.log("Le titre GONE GIRL est de type : "+typeof(document.getElementById("#1")));
    tiret();
    console.log("Notre page contient "+document.querySelectorAll("p").length+" paragraphes et "+document.images.length+" images");
    tiret();
    console.log("Notre page contient 3 synopsis de films.");
    tiret();
    console.log("La première rubrique des films date de l'année --2014--");
    console.log("Il existe 2 films sous la rubrique 2016");
    tiret();
    console.log("Synopsis du film :IMITATION GAME:");

}

main();