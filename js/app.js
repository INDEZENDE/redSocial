//login
var provider = new firebase.auth.GoogleAuthProvider();//Instancia del provedor de servicio
$('#login').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    console.log(result.user);
    guardaDatos(result.user);
    $('#login').hide();
    $('#root').append("<img src='"+result.user.photoURL+"' />");
  });
});
//Guarda automáticamente
function guardaDatos(user) {
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("Prueba1/" +user.uid)
  .set(usuario)
}



//Guardar en Base de datos información ingresada como objeto
$('#guardar').click(function(){
  firebase.database().ref("redSocial")
  .set({
    nombre:"Blis",
    edad:"15",
    sexo:"masculino"
  })
});

//Leer base de guardaDatos
firebase.database().ref("Prueba1")
.on("child_added", function(s){
  var user= s.val();
  $('#root').append("<img width='100px' src='"+user.foto+"' />");

})
