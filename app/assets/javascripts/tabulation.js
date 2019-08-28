$(document).ready(function() {
 $("#tab-1").addClass("current")
   $(".tab-1").show()

   $("#dropdown").on("click", function(){
     $("#dropdown-div").show()
   })

   $( document ).on( "click", function( event ){
    	if ( !$( event.target ).closest( "#dropdown" ).length ){
    	  $( "#dropdown-div" ).hide(200);
  	 }
   });

   $("#login").on("click", function(){
    $("#modal").show()
    $("#login-tab").addClass("current")
    $("#signup-tab").removeClass("current")
    $(".login-div").show()
    $(".signup-div").hide()
    $(".login-div").load("/users/sign_in .container-fluid")
   })
   $("#signup").on("click", function(){
    $("#modal").show()
    $("#signup-tab").addClass("current")
    $("#login-tab").removeClass("current")
    $(".login-div").hide()
    $(".signup-div").show()
    $(".signup-div").load("/users/sign_up .container-fluid")
   })

   $("#signup-tab").on("click", function(){
    $("#signup-tab").addClass("current")
    $("#login-tab").removeClass("current")
    $(".login-div").hide()
    $(".signup-div").show()
    $(".signup-div").load("/users/sign_up .container-fluid")
   })
   $("#login-tab").on("click", function(){
    $("#login-tab").addClass("current")
    $("#signup-tab").removeClass("current")
    $(".login-div").show()
    $(".signup-div").hide()
    $(".login-div").load("/users/sign_in .container-fluid")
   })

   $(document).on("click", function(event){
    if (event.target === $("#modal")[0]) {
      $("#modal").hide()
    }
   })

//Carousel

     Reference = $(".carrousel li:first-child"); // Notre référence sera la taille de la première image
     NbElement = $(".carrousel li").length; // Pour créer notre bandeau on aura besoin du nombre d'images
   $(".carrousel")
    .css("width", (Reference.width() * NbElement) ); // La largeur totale du bandeau fera Nbre d'images * largeur des images
   $(".container-carrousel")
    .width(  Reference.width()  ) 
    .height( Reference.height() ) // La taille de l'affichage et réglé à la taille d'une image
    .css("overflow", "hidden"); // Et tout ce qui dépasse est "hidden"
      Cpt = 0; 
    $("#carrousel-next").click(function() { // Lien pour afficher l'image suivante
      if (Cpt === NbElement - 1) { // Si on essaie de dépasser l'image de fin on revient à zéro
        Cpt = 0;
        $(".carrousel").animate({
        marginLeft : - (Reference.width() * Cpt)
        });
      }
      else { // Sinon on passe juste à la suivante
        Cpt ++;
        $(".carrousel").animate({
        marginLeft : - (Reference.width() * Cpt)
        });
      }
    });
    $("#carrousel-prev").click(function() { // Lien pour afficher l'image précédente
      if (Cpt ===0) { // Si on essaie de retourner en arrière dès la première image
        Cpt = NbElement - 1; // On arrive sur la dernière
        $(".carrousel").animate({
          marginLeft : - (Reference.width() * Cpt)
        });
      }
      else { // Sinon on arrive normalement sur l'image précédente
        Cpt--;
        $(".carrousel").animate({
          marginLeft : - (Reference.width() * Cpt)
        });
      }
    });

  var timer = setInterval(myTimer, 5000); //On déplace le carouselle vers la droite toutes les 5 secondes
  function myTimer() {
        if (Cpt === NbElement - 1) {
          Cpt = 0;
          $(".carrousel").animate({
          marginLeft : - (Reference.width() * Cpt)
          });
        }
        else { // Et si on arrive au bout on boucle
          Cpt ++;
          $(".carrousel").animate({
          marginLeft : - (Reference.width() * Cpt)
          });
        }
    }
    myTimer();

// Mets ici ton code

});