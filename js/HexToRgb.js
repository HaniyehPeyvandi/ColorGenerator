function checkValid(){
    var myVal = document.getElementsByTagName("input").item(0).value;
    var validValues = /^[0-9A-Fa-f]+$/;

    if (myVal[0] == "#"){
        myVal = myVal.replace("#", "");
    }

    if( myVal.match(validValues) ){
        if (myVal.length == 3){
            buildDivs_1(myVal);
        }
        else if (myVal.length == 6){
            buildDivs_2(myVal);
        }else {
            alert("Invalid Color Name!");
        }
    }else{
        alert("Invalid Color Name!");
    }
}

function buildDivs_1(str){

    document.getElementsByClassName("box").item(0).style.display = "flex";

    var colorsCode = [];
    for (var i=0 ; i<str.length ; i++){
        colorsCode[i] = Number("0x" + str[i] + str[i]);
    }
    var myDiv = document.createElement("div");
    document.getElementsByClassName("box").item(0).appendChild(myDiv);
    myDiv.classList.add("childBox");
    myDiv.style.backgroundColor = "rgb("+colorsCode[0]+","+colorsCode[1]+","+colorsCode[2]+")" ;
    myDiv.innerText = "rgb("+colorsCode[0]+","+colorsCode[1]+","+colorsCode[2]+")" ;
}

function buildDivs_2(str){

    document.getElementsByClassName("box").item(0).style.display = "flex";

    var colorsCode = [];
    for (var i=0 ; i<str.length ; i+=2){
        colorsCode[i] = Number("0x" + str.substr(i,2));
    }
    var myDiv = document.createElement("div");
    document.getElementsByClassName("box").item(0).appendChild(myDiv);
    myDiv.classList.add("childBox");
    myDiv.style.backgroundColor = "rgb("+colorsCode[0]+","+colorsCode[2]+","+colorsCode[4]+")" ;
    myDiv.innerText = "rgb("+colorsCode[0]+","+colorsCode[2]+","+colorsCode[4]+")" ;
}
