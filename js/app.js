$(document).ready(function(){
    var flag = false 
    function changeColor(){
        if (!flag){
            $(".main-titulo").css("color","white");
            flag = true
        }else{
            $(".main-titulo").css("color","#DCFF0E"); 
            flag = false
        } 
    };
    
    setInterval(changeColor, 2);

    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {          
            var img_aleatoria = Math.floor((Math.random() * 4) + 1)
            var ruta_imagen = "image/"+img_aleatoria+".png" 
            $(".col-" + i).append("<img src='" + ruta_imagen + "'>")
            $(".col-" + i + " img").attr("class", "imagenes")          
            $(".imagenes").attr("width", "55%")
            $(".imagenes").attr("width", "55%")             
        }                
    }    
});


    