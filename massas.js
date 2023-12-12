
function resultado(){
    var rodizio = document.getElementById('rodizio').value;
    var familia = document.getElementById('familia').value;
    var grande = document.getElementById('grande').value;
    var media = document.getElementById('media').value;
    var broto = document.getElementById('broto').value;
    var total = parseInt(rodizio) + parseInt(familia) + parseInt(grande) + parseInt(media) + parseInt(broto);
     document.getElementById('total').innerHTML = total;
     var calzone = document.getElementById('calzone').value;
     document.getElementById('totalCalzone').innerHTML = calzone;

     if(total <= 80){
        alert('UM CARRO')
     }else if(total > 80 && total <= 160){
        alert('DOIS CARROS')
     }else if(total > 160 && total <= 220){
        alert('TRÊS CARROS')
     }if(total > 220 && total <= 260){
        alert('TRÊS CARROS + AÉREO')
     }else if(total > 260 && total <= 340){
        alert('TRÊS CARROS + AÉREO + UM CARRO DE VOLTA')
     }else if(total > 340 && total <= 420){
        alert('TRÊS CARROS + AÉREO + DOIS CARRO DE VOLTA')
     }else if(total > 420 && total <= 480){
        alert('TRÊS CARROS + AÉREO + TRÊS CARRO DE VOLTA')
     }
}





