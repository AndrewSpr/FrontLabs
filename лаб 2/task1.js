const firstButton = document.getElementById("button_1");
firstButton.onclick = function (number) {
  number = prompt("Введите двухзначное число: ");

  if (String(number).length == 2) {
    const dict = [
      [
        "ноль",
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
        "десять",
        "",
        "две",
        "",
        "четыр",
        "пят",
        "шест",
        "сем",
        "восем",
        "девят",
      ],
      ["", "", "двадцать", "тридцать", "сорок", "", "", "", "", "девяносто"],
    ];
    if (number >= 0 && number <= 10) return alert(dict[0][number]);
    if (number > 10 && number <= 19)
      return alert((dict[0][number] || dict[0][number - 10]) + "надцать");
    if (number >= 20 && number <= 99) {
      const [units = 0, tens] = [...("" + number)].reverse().map(Number);
      return alert(
        [
          tens ? dict[1][tens] || dict[0][tens] + "десят" : "",
          units ? dict[0][units] : "",
        ].join(" ")
      );
    }
  }

  return alert("Введите двухзначное число!");
};

const secondButton = document.getElementById("button_2");
secondButton.onclick = function (str) {
  str = prompt(
    "Введите название стиля через дефис, прим: font-size, background-color"
  );
  return alert(
    str
      .split("-")
      .map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("")
  ); // разбиваем по дефису и соединяем, преобразовывая в новую строку
};

const thirdButton = document.getElementById("button_3");
thirdButton.onclick = function (str) {
  str = prompt(
    "Введите название стиля в camelCase, прим: fontSize, backgroundColor"
  );
  return alert(str.replace(/([A-Z])/g, "-$1").toLowerCase());
};

const fourthButton = document.getElementById("button_4");
fourthButton.onclick = function calculator(expression) {
  expression = prompt("Введіть приклад у форматі operand1 operator operand2:");

  const parts = expression.split(" ");
  const operator = parts[1];
  const operand1 = parseFloat(parts[0]);
  const operand2 = parseFloat(parts[2]);

  let result;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
    default:
      return "Невірний оператор";
  }

  return alert(result);
};

const fifthButton = document.getElementById("button_5");
fifthButton.onclick = function replaceDateFormats(text) {
  text = prompt('Введіть текст: ')

  const regex = /(\d{4})\/(\d{2})\/(\d{2})/g;
  const replacedText = text.replace(regex, '$3.$2.$1');

  return alert(replacedText);
}
