function checkSpam(str) {
  // Напишите функцию checkSpam(str), возвращающую true,
  // если str содержит '1xBet' или 'XXX', а иначе false.
  // Функция должна быть нечувствительна к регистру.
  const regexp = /1xBet|XXX/i;
  return regexp.test(str);
}
