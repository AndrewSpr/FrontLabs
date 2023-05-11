function unique(arr) {
  return Array.from(new Set(arr));
}

let strings = [
  "C++",
  "C#",
  "C++",
  "C#",
  "C",
  "C++",
  "JavaScript",
  "C++",
  "JavaScript",
];

console.log(unique(strings));

//

const session = [
  { discipline: "Математика", points: 80, result: "зараховано" },
  { discipline: "Фізика", points: 65, result: "незараховано" },
  { discipline: "Хімія", points: 90, result: "зараховано" },
  { discipline: "Історія", points: 50, result: "незараховано" },
];

function displayDisciplines(session) {
  const passedDisciplines = session.filter(
    (item) => item.result === "зараховано"
  );
  const failedDisciplines = session.filter(
    (item) => item.result === "незараховано"
  );

  console.log("Зараховані дисципліни:");
  passedDisciplines.forEach((item) => {
    console.log(`${item.discipline}: ${item.points} балів`);
  });

  console.log("\nНезараховані дисципліни:");
  failedDisciplines.forEach((item) => {
    console.log(`${item.discipline}: ${item.points} балів`);
  });
}

console.log(displayDisciplines(session));

// 2

function addDiscipline(disciplineName) {
  const existingDiscipline = session.find(
    (item) => item.discipline === disciplineName
  );

  if (existingDiscipline) {
    existingDiscipline.points += 1;

    if (existingDiscipline.points >= 60) {
      existingDiscipline.result = "зараховано";
    }
  } else {
    const newDiscipline = {
      discipline: disciplineName,
      points: 1,
      result: "незараховано",
    };
    session.push(newDiscipline);
  }
}

addDiscipline("Хімія");
addDiscipline("Англійська");

console.log(session);

// 3

function calculateAveragePoints() {
  const totalPoints = session.reduce((sum, item) => sum + item.points, 0);
  const averagePoints = totalPoints / session.length;
  return averagePoints;
}

const average = calculateAveragePoints();
console.log(`Середній бал з усіх дисциплін: ${average}`);

// 4

function countFailedDisciplines() {
  const failedDisciplines = session.filter(
    (item) => item.result === "незараховано"
  );
  return failedDisciplines.length;
}

const count = countFailedDisciplines();
console.log(`Кількість незарахованих дисциплін: ${count}`);

//5

function findHighestScoringDiscipline() {
  let highestScoringDiscipline = null;
  let highestScore = -Infinity;

  for (let i = 0; i < session.length; i++) {
    const discipline = session[i];

    if (discipline.points > highestScore) {
      highestScore = discipline.points;
      highestScoringDiscipline = discipline.discipline;
    }
  }

  return highestScoringDiscipline;
}

const highestScoring = findHighestScoringDiscipline();
console.log(`Дисципліна з найвищим балом: ${highestScoring}`);

//6

function findDisciplinesByPoints(targetPoints) {
  const passedDisciplines = session.filter(
    (item) => item.points >= targetPoints
  );
  const disciplineNames = passedDisciplines.map((item) => item.discipline);
  return disciplineNames;
}

const targetPoints = 60;
const disciplines = findDisciplinesByPoints(targetPoints);

console.log(`Дисципліни, що здані на ${targetPoints} балів:`);
disciplines.forEach((discipline) => {
  console.log(discipline);
});
