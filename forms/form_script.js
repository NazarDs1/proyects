$(window).ready(function(){
   // alert("Pagina lista");
  function datAjaxSession(){
    /*$.ajax({url: "../php/session_ref.php", success: function(result){
      $("#div1").html(result);
    }});*/
  }
  datAjaxSession();



$("#btn_submit").on('click', function(ev){
  ev.preventDefault();
  if($(this).parents("form").data("typeform")!= "login"){
    var mensaje = "";
    if($("[name='name']").val() == "") mensaje = "El nombre es requerido";
    if($("[name='email']").val() == "") mensaje = "El Email es requerido";
    if($("[name='pass']").val() == "") mensaje = "El password es requerido";

    if(!/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/.test($("[name='pass']").val())) mensaje = "el password no cumple con el formato";

    if($("[name='pass']").val()!=$("input[name='repass']").val() ) mensaje = "Los password no coinciden";
	console.log($("[name='email']").val());
    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test($("input[name='email']").val())) mensaje = "El email no cumple con el formato...";
    if(mensaje != "") {
      alert(mensaje);
      return false
    }
    $("#registrar").click();
  }
      var form = $(this).parents('form');
      var datform = form.serialize();
  $.ajax({ // En data puedes utilizar un objeto JSON, un array o un query string
     //data: {"parametro1" : "valor1", "parametro2" : "valor2"}, //Cambiar a type: POST si necesario
     data:datform,
     type: "POST", // Formato de datos que se espera en la respuesta
     dataType: "html", // URL a la que se enviará la solicitud Ajax
     url: "http://nazardesign.dx.am/php/login_regist.php", })
     .done(function( data, textStatus, jqXHR ) {
     $("#resp").html(data);
     $("#resp").slideDown(100);
     $("#resp").click(function(){
     		$(this).slideUp(100);
     });
    datAjaxSession();
    form[0].reset();
         if ( console && console.log ) {
           console.log( "La solicitud se ha completado  correctamente. / "+ data );

         }
})
    .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
           console.log( "La solicitud a fallado: " + textStatus);
         }
});


})
    $(".inp_disable").attr("disabled","")
    $("#registrar").on("click", function(ev){

          ev.stopImmediatePropagation();

     $(".regist").slideToggle(500, function(){
         if($(this).find("input").attr("disabled")=="disabled"){
           console.log("entradas activadas");
           $(this).find("input").removeAttr("disabled");
           $("#headform").html("Formulario de Registro");
           $(this).parent().data("typeform", "registro");
       }
        else {
         console.log("entradas desactivadas");
         $(this).find("input").attr("disabled", "");
         $("#headform").html("Formulario de Inicio");
		 $(this).parent().data("typeform", "login")
        }

           //console.log();
       });
         // console.log("pasar");
    })

});
