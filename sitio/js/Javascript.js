<DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title> Javascript</title>
<style>
.caja{
background:#ffdd00;
height: 300px;
width: 300px;
}
</style>
</head>
<body>
<div class="caja" id="caja1">
CAJA
</div>
<div class="caja" id="boton">
Botonera
</div>
<script src="jquery.js">

</script>
<script>
    //Javascript
//document.getElementById("caja1").style.visibility="hidden";
    //jQuery
    //$('#caja').hide();
    $('#caja1').click(function(){
         $('#caja1').slideToggle();
    });
</script>

</body>
</html>