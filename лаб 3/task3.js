function findDates(text) {
    const regex = /\d{4}-\d{2}-\d{2}/g;
    const dates = text.match(regex);
  
    const validDates = dates.filter(isValidDate);
  
    return validDates;
  }
  
  function isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }

const text = "Зустріч запланована на 2023-05-20, а наступна на 2023-05-25. Не забудьте про ці дати.";

const dates = findDates(text);
console.log(dates);

// 2

function toCamelCase(snakeCase) {
    const regex = /_([a-z])/g;
    return snakeCase.replace(regex, (_, char) => char.toUpperCase());
  }

  console.log(toCamelCase("font_size, my_name"))

// 3

function toSnakeCase(camelCase) {
    const regex = /([A-Z])/g;
    return camelCase.replace(regex, (_, char) => '_' + char.toLowerCase());
  }

  console.log(toSnakeCase("fontSize, myName"))

// 4

function findHexColor(text) {
    const regex = /#([A-Fa-f0-9]{3,6})\b/g;
    const matches = text.match(regex);
    return matches ? matches : null;
  }

console.log(findHexColor('Какой-то #ABC and #1234EF текст'))