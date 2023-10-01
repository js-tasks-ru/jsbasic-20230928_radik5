function ucFirst(str) {
  if (arguments.length === 0 || arguments[0] === null) return undefined;
  if (arguments[0] === '') return '';

  let arrChar = str.split(""); // создание массива символов
  arrChar[0] = arrChar[0].toUpperCase(); // преобразуем первый символ

  return arrChar.join('');
}
