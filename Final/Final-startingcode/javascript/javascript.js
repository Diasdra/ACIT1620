
function thumbBarLoop(){
    for(var i = 0; i < 5; i++){
        var img_item = document.createElement("img");
        img_item["src"] = `images/pic${i+1}.jpg`;
        var bar =document.getElementById("thumb-bar")  
        bar.append(img_item)  }
}

document.addEventListener("DOMContentLoaded", function() {
    thumbBarLoop();
  });