
// 1. Функция для проверки длины строки.

const checkLength = (string, length) => string.length <= length;
checkLength('проверяемая строка', 20);

// 2. Функция для проверки, является ли строка палиндромом.

function checkingPalindrome (str) {
  let result = false;
  const tempString = str.toLowerCase().replaceAll(' ','');
  for (let i = 0; i < tempString.length; i++) {
    result = tempString[i] === tempString[tempString.length - 1 - i];
    if(!result) {
      return false;
    }
  }
  return result;
}
checkingPalindrome('Лёша на полке клопа нашёл ');

/* 3.
Функция, которая принимает строку, извлекает содержащиеся в ней цифры
от 0 до 9 и возвращает их в виде целого положительного числа.
*/

const transferInNum = (string) => {
  let result = '';
  const toString = String(string);
  for(let i = 0; i < toString.length; i++) {
    if(parseInt(toString[i], 10) >= 0) {
      result += toString[i];
    }
  }
  return parseInt(result, 10);
};
transferInNum ('1 кефир, 0.5 батона');


/* 4.
Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает
исходную строку, дополненную указанными символами до заданной длины.
*/

const padStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newLength = result.length + pad.length;
    const actualPad = newLength <= minLength ? pad : pad.slice(0, minLength - newLength);
    result = actualPad + result;
  }
  return result;
};
padStart('1', 2, '0');
