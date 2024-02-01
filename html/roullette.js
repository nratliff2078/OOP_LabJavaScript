"use script";

console.log("This is a message to the console log!");


let A = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 
    2, 10, 32, 0o0, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 
    23, 19, 5, 36];

    //Pick a random number from A:
const randNum = A[Math.floor(Math.random() * A.length)];
console.log(randNum);


//0 is red (“Rouge”), 34 is black (“Noir”), 10 is red, and so forth (colors alternate)
for(let i=0;i<A.length;++i){
    if(A[i] == randNum){
        if(A[i] % 2 == 0){
            console.log("Black!")
        }
        else{console.log("Red!")}
    }
}

if(randNum % 2 == 0){
    console.log("The number itself is Even!")
}
else{
    console.log("The number itself is Odd!")
}

//0 is rouge, impair, and manque
//00 is noir, pair, and passe
//Numbers 1-18 are “Manque” (“failed”) and 19-36 are “Passe” (“passed”)
if(randNum == 0o0){
    console.log("noir, pair, and passe")
}
else if(randNum == 0){
    console.log("rouge, impair, and manque")
}
else{
    if(randNum > 0 && randNum <=18){
        console.log("Failed!")
    }
    else{console.log("Passed!")}
}

