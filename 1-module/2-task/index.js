/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
/**
 * Необходимо, чтобы на сайте можно было поприветствовать только пользователей, 
 * которые удовлетворяют следующему условию – имя не пустое, без пробелов, минимум 4 символа. 
 */
function isValid(name) {
  // проверка аргумента, что он не пустой и не null
  if (arguments.length === 0 || arguments[0] === null) return false;
  // проверка есть ли пробелы
  const nameArr = name.split("");
  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] === ' ') return false;
  }
  // name должен быть минимум четыре символа
  if (nameArr.length >= 4) return true;
  else return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
