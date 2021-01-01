// https://github.com/shahnewaztameem/assignment-3

// Distance Converter
function kilometerToMeter(kilometer) {
  //validations
  if (kilometer == null) return 'Value can not be empty';
  if (kilometer < 0 || typeof kilometer != "number") return 'Invalid parameter value';

  //return calculated value
  return kilometer * 1000;
}

// budget calculator
// takes 3 parameter and return total budget
function budgetCalculator(numberOfWatchToBuy, numberOfPhoneToBuy, numberOfLaptopToBuy) {
  const watchPrice = 50;
  const phonePrice = 100;
  const laptopPrice = 500;

  //validations
  if (numberOfWatchToBuy == null || numberOfPhoneToBuy == null || numberOfLaptopToBuy == null) return 'Values can not be empty';

  if (numberOfWatchToBuy < 0 || numberOfPhoneToBuy < 0 || numberOfLaptopToBuy < 0) return 'Product Quantity can not be negative';

  if (numberOfWatchToBuy % 1 != 0 || numberOfPhoneToBuy % 1 != 0 || numberOfLaptopToBuy % 1 != 0) return 'All parameter value should be Integer!';

  //calculate and return total price
  return (watchPrice * numberOfWatchToBuy) + (phonePrice * numberOfPhoneToBuy) + (laptopPrice * numberOfLaptopToBuy);
}


// hotel cost calculator
// takes one parameter and return the total cost according to parameter
function hotelCost(numberOfDays) {
  // validations
  if (numberOfDays == null) return 'Value can not be empty';
  if (numberOfDays < 0 || typeof numberOfDays != "number") return 'Invalid parameter value';

  let roomRent = 0;
  let firstTenDaysRent = 0;
  let secondTenDaysRent = 0;
  let remainingDaysRent = 0;

  if (numberOfDays <= 10) {
    roomRent = 100 * numberOfDays;
  } else if (numberOfDays <= 20) {
    firstTenDaysRent = 10 * 100;
    remainingDaysRent = (numberOfDays - 10) * 80;
    roomRent = firstTenDaysRent + remainingDaysRent;
  } else {
    firstTenDaysRent = 10 * 100;
    secondTenDaysRent = 10 * 80;
    remainingDaysRent = numberOfDays - 20;
    roomRent = firstTenDaysRent + secondTenDaysRent + remainingDaysRent * 50
  }
  return roomRent;
}

// recives an array and return the max length element
function megaFriend(numberOfFriends) {
  if (numberOfFriends.length <= 0) return 'Length can not be empty';
  if (!(numberOfFriends instanceof Array)) return 'Passed argument is not an array';

  let maxLengthElement = numberOfFriends[0];

  for (let i = 1; i < numberOfFriends.length; i++) {
    let element = numberOfFriends[i];

    // update the value
    if (element.length > maxLengthElement.length) {
      maxLengthElement = element;
    }
  }
  return maxLengthElement;
}

