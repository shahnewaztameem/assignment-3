function kilometerToMeter(kilometer) {
  if (kilometer == null) return;
  if (kilometer < 0) return 'Parameter value can not be negative';
  return kilometer * 1000;
}

console.log(kilometerToMeter(1))