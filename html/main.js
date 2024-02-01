
"use strict";

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");

function main(){
    let L = [   ["Number", "Color", "Parity", "Fail/Passe"] ];

    for(let i=0;i<L.length;++i){
        let row = L[i];
        let tr = document.createElement("tr");
        tbl.appendChild(tr);
        for(let j=0;j<row.length;++j){
            let td = document.createElement("td");
            tr.appendChild(td);
            let txt = document.createTextNode( row[j] );
            td.appendChild( txt );
        }
    }
    document.body.appendChild(tbl);

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
    // Set table borders ...
  tbl.setAttribute("border", "1");
}


function onButtonClick() {
   
    let A = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 
        2, 10, 32, 0o0, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 
        23, 19, 5, 36];
    
    let color = "None";

        //Pick a random number from A:
    const randNum = A[Math.floor(Math.random() * A.length)];
    
        //0 is red (“Rouge”), 34 is black (“Noir”), 10 is red, and so forth (colors alternate)
        for(let i=0;i<A.length;++i){
            if(A[i] == randNum){
                if(A[i] % 2 == 0){
                    console.log("Black!");
                    color = "Black";
                }
                else{
                    console.log("Red!");
                    color = "Red"}
            }
        }

        let parity = "NA";   // Even numbers are “Pair” (“even”) and odd are “Impair” (“odd”)
        if(randNum % 2 == 0){
            parity = "Pair"; //odd
        }
        else{
            parity = "Impair"; //even
        }

        let FP = "NA";  // Numbers 1-18 are “Manque” (“failed”) and 19-36 are “Passe” (“passed”)
        if(randNum > 0 && randNum <=18){
            FP = "Manque";
        }
        else{FP = "Passe";}


     // creates a <table> element and a <tbody> element
    let L = [   [randNum, color, parity, FP] ];

    for(let i=0;i<L.length;++i){
        let row = L[i];
        let tr = document.createElement("tr");
        tbl.appendChild(tr);
        for(let j=0;j<row.length;++j){
            let td = document.createElement("td");
            tr.appendChild(td);
            let txt = document.createTextNode( row[j] );
            td.appendChild( txt );
        }
    }
    document.body.appendChild(tbl);

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
}


main()





