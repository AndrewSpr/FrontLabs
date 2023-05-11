// 1

function displayCurrentDate() {
    const outputElement = document.getElementById('output');
  
    const currentDate = new Date();
  
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    };
  
    const formattedDate = currentDate.toLocaleString('uk-UA', options);
  
    const outputText = `Дата: ${formattedDate}\nДень тижня: ${getWeekday(currentDate)}\nЧас: ${getTime(currentDate)}`;
  
    outputElement.textContent = outputText;
  }
  
  function getWeekday(date) {
    const weekdays = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
  }
  
  function getTime(date) {
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  }

// 2

function formatDateString(dateString) {
    dateString = prompt("Введіть дату у форматі дд.мм.рррр або дд/мм/рррр або дд-мм-рррр:")

  const currentDate = new Date();
  const enteredDate = parseDate(dateString);

  if (isToday(currentDate, enteredDate)) {
    return secondOutput.innerHTML = "Сьогодні";
  } else if (isYesterday(currentDate, enteredDate)) {
    return secondOutput.innerHTML = "Вчора";
  } else if (isWithinPastDays(currentDate, enteredDate, 2, 6)) {
    const daysAgo = getDaysAgo(currentDate, enteredDate);
    return secondOutput.innerHTML = `${daysAgo} дні тому`;
  } else if (isWithinPastDays(currentDate, enteredDate, 7, 365)) {
    return secondOutput.innerHTML = "Тиждень тому";
  } else if (isWithinPastDays(currentDate, enteredDate, 366, Infinity)) {
    return secondOutput.innerHTML = "Рік тому, або більше року тому";
  } else {
    return secondOutput.innerHTML = formatDate(enteredDate);
  }
}

function parseDate(dateString) {
  const dateParts = dateString.split(/[./-]/);
  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const year = parseInt(dateParts[2]);
  return new Date(year, month, day);
}

function isToday(currentDate, enteredDate) {
  return (
    currentDate.getDate() === enteredDate.getDate() &&
    currentDate.getMonth() === enteredDate.getMonth() &&
    currentDate.getFullYear() === enteredDate.getFullYear()
  );
}

function isYesterday(currentDate, enteredDate) {
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    yesterday.getDate() === enteredDate.getDate() &&
    yesterday.getMonth() === enteredDate.getMonth() &&
    yesterday.getFullYear() === enteredDate.getFullYear()
  );
}

function isWithinPastDays(currentDate, enteredDate, minDays, maxDays) {
  const timeDifference = currentDate.getTime() - enteredDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysDifference >= minDays && daysDifference <= maxDays;
}

function getDaysAgo(currentDate, enteredDate) {
  const timeDifference = currentDate.getTime() - enteredDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}
