var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

////////

var result = "";

for(var i = 0; i < stringList.length; i++){
  if( i < stringList.length -1){
      result += stringList[i] + ", ";
    } else{
      result += stringList[i] + ".";
    }

}
console.log("Months listed are " + result);

///////

var lastNumber = numList.length;

console.log(lastNumber);

////////

var secondTime = "";

for(var i = 0; i < numList.length; i++){
  secondTime +=  numList[i];

}
console.log(secondTime);


////////

var total = 0;
for(var i = 0; i < numList.length; i++){
  total += numList[i];

}
console.log(total);

////////

for(var i = 0; i < boolList.length; i++){
  if(boolList[i] === boolList[1] && boolList[i] === true){
    var endTotal = numList[0] + numList[2];
    console.log(endTotal);
  } else if (boolList[i] === boolList[1] && boolList[i] === false){
    var numberTwo = numList[1] *  numList[1];
    console.log(numberTwo);
  }
}

///////////

for(var i = 0; i < boolList.length; i++){
  if(boolList[i] === true){
    console.log(numList[i]);
  }
}
