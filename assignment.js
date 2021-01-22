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

  //calculate and return total price
  return (watchPrice * numberOfWatchToBuy) + (phonePrice * numberOfPhoneToBuy) + (laptopPrice * numberOfLaptopToBuy);

}