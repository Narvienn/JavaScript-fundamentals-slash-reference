
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(appleNumber, orangeNumber) {
   const applePieces = cutFruitPieces(appleNumber);
   const orangePieces = cutFruitPieces(orangeNumber);
    const juice = `Juice made from ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice; 
  }

  fruitProcessor(2,3);
  /* Data flow inside this function call:
  1. Arguments 2 and 3 will be passed to fruitProcessor() parameters appleNumber and orangeNumber, respectively
  2. These parameter values will then be used in the 2 invocations of the cutPieces() function inside the fruitProcessor() function
  3. appleNumber/orangeNumber is passed as the parameter of the cutPieces() function (the 'fruit' parameter) and calculated accordingly
  */