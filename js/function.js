
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
  if(Number(string)) {
    return string;
  }
  for(let i = 0; i < string.length; i++) {
    if(parseInt(string[i], 10) >= 0) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

transferInNum ('2023 год');


/* 4.
Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает
исходную строку, дополненную указанными символами до заданной длины.
*/
// Первый вариант:
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if(actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + string;
};
myPadStart ('q', 4, 'qwerty');

// Второй вариант:
const myPadStart2 = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};
myPadStart2('qwerty', 4, '0');

