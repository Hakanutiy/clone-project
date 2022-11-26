let year = 2019;

if (year % 4 === 0 || year % 400 === 0 && year != 100) {
  console.log(year + ' год - високосный');
} 
// допишите код здесь
else {
  console.log(`${year} год — невисокосный`);
}