// 🎯 Je cible mes éléments
var arrows = document.querySelectorAll("#controls i");
var image = document.querySelector("#slider img");

// 👀 J'écoute les clics sur les flèches
for(var i=0; i<2; i=i+1) {
  arrows[i].addEventListener("click", function() {
    image.setAttribute("src", "https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg");
  });
}