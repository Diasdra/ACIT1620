
function thumbBarLoop(){
    for(var i = 0; i < 5; i++){
        var img_item = document.createElement("img");
        img_item["src"] = `images/pic${i+1}.jpg`;
        img_item.className = "picture";
        var bar =document.getElementById("thumb-bar");
        bar.append(img_item);  }
}

function hideElements(){
    section = document.getElementsByTagName("section");
    for(var i = 0; i < section.length; i++){
    section[i].style.display = "none";
    }
}

function showElements(){
    section = document.getElementsByTagName("section");
    for(var i = 0; i < section.length; i++){
    section[i].style.display = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    thumbBarLoop();
    hideElements();
  });

function swapPicture(num){
    document.getElementById("displayed").src = `images/pic${num}.jpg`;
}

window.onload = function(){
    var pics = document.getElementsByClassName("picture");
    for(var i = 0; i < pics.length; i++){
            let k = i + 1;
            pics[i].addEventListener("mouseover", function() {
            showElements();
            swapPicture(k);
        });
    }   
}

function blurImage(){
    order = document.getElementById("effect").value;
    if(order == "blur"){
       current = document.getElementById("displayed").src 
       num = current.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2');
       document.getElementById("displayed").src = `images/pic${num}B.jpg`
    }
    else{
        alert("Wrong input");

    }
    document.getElementById("effect").value = ''
}