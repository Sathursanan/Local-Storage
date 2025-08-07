function saveName() {
    var name = document.getElementById("nameInput").value;
    localStorage.setItem('enterName' , name);
   
}

function getName () {
    var storedName = localStorage.getItem('enterName');
     document.getElementById('output').innerHTML = storedName;
    
}

function clearStorage () {
    var clear = localStorage.clear();
    document.getElementById('output').innerHTML="Names are cleared"

    
}

