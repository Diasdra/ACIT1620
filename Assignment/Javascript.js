function dark_func(){
    document.body.classList.toggle("dark-mode");
    var element = document.getElementsByClassName("text");
    for(var i = 0; i < element.length; i++)
        {
            element[i].classList.toggle('dark-mode');
        }
    
    if(document.getElementById("dark").textContent == 'Light Theme'){
        document.getElementById("dark").textContent = 'Dark Theme';
        document.getElementById("dark").style.backgroundColor =  'rgb(105,105,105)';
        document.getElementById("save").style.backgroundColor = 'rgb(93,153,124)';
        document.getElementById("cancel").style.backgroundColor = 'rgb(212,59,22)';
        document.getElementById("note").style.backgroundColor = 'rgb(93,153,124)';
    }
    else{
        document.getElementById("dark").textContent = 'Light Theme';
        document.getElementById("dark").style.backgroundColor =  'rgb(105,105,105)';
        document.getElementById("save").style.backgroundColor = 'rgb(105,105,105)';
        document.getElementById("cancel").style.backgroundColor = 'rgb(105,105,105)';
        document.getElementById("note").style.backgroundColor =  'rgb(105,105,105)';
    }        

}

function hide_text(){
        document.getElementById("save").style.display= "none";
        document.getElementById("cancel").style.display = "none";
        document.getElementById("textbox").style.display = "none";

}

function new_text(){
    document.getElementById("save").style.display= "";
    document.getElementById("cancel").style.display = "";
    document.getElementById("textbox").style.display = "";
    document.getElementById('textbox').value = "";
}

var notes_array = [{title: "note one", body: "abc"}, {title: "note two", body: "123"}]

function change_textarea(spot){
    document.getElementById('textbox').value = "";
    document.getElementById('textbox').value = notes_array[spot].body
}

function update_array(){
    restOfLines = '';
    var lines = document.getElementById("textbox").value.split('\n');
    var firstLine = document.getElementById("textbox").value.split('\n')[0];
    for(var i = 1; i < lines.length; i++){
        restOfLines = restOfLines.concat(lines[i]);
    }
    notes_array.push({title: firstLine, body: restOfLines});
    console.log(`added ${firstLine} and ${restOfLines}`);

    var listItem = document.createElement("li");
    var listhead = document.getElementById("notes");
    
    listItem.innerHTML = `<li onclick= "change_textarea(${notes_array.length-1})">${firstLine}</li>`;
    listhead.appendChild(listItem);

    console.log(notes_array)

}
