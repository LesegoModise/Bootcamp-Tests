function countAllFromTown(regNum, regLocation) {
    const regNumbers = regNum.split(','); //The string is split into an array
      let count = 0; //We are initialising a counter for every registration numbers that start from 0 (We start counting from 0)
     
    for (var i = 0; i < regNumbers.length; i++) { //The code is repeated for each registration number
    var regNumber = regNumbers[i].trim();
      if (regNumber.startsWith(regLocation)){//The code is also trimmed of any whitespaces while it loops
       //We are looking for every registration number so we need every registration number that starts with the location and registration number
    count++; //We want our registration number to start counting from the first registration number found and so forth
    }
    }
    return count; //We want our code to return the total of all registration numbers found
    }