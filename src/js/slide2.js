let count = 1;
document.getElementById("buttonradio2-1").checked = true;

setInterval( function(){
nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("buttonradio2-"+count).checked = true;

}