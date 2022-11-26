const tableElements = [
  {
    participant: "Beto",
    points: 41,
    position: "#º",
  },
  {
    participant: "Danilo",
    points: 34,
    position: "#º",
  },
  {
    participant: "Eduardo",
    points: 26,
    position: "#º",
  },
  {
    participant: "Gabi",
    points: 29,
    position: "#º",
  },
  {
    participant: "Gabriel",
    points: 20,
  },
  {
    participant: "Guilherme",
    points: 35,
    position: "#º",
  },
  {
    participant: "Gustavo",
    points: 33,
    position: "#º",
  },
  {
    participant: "Henrique",
    points: 45,
    position: "#º",
  },
  {
    participant: "Jonatas",
    points: 36,
    position: "#º",
  },
  {
    participant: "Jorge",
    points: 32,
    position: "#º",
  },
  {
    participant: "Marcelo",
    points: 42,
    position: "#º",
  },
  {
    participant: "Mariana",
    points: 27,
    position: "#º",
  },
  {
    participant: "Pedro",
    points: 37,
    position: "#º",
  },
  {
    participant: "Wegna",
    points: 37,
    position: "#º",
  },
  {
    participant: "Yago",
    points: 37,
    position: "#º",
  },
];

tableElements.sort((a, b) => {
  return b.points - a.points;
});

const place = [
  "1º",
  "2º",
  "3º",
  "4º",
  "5º",
  "6º",
  "7º",
  "8º",
  "9º",
  "10º",
  "11º",
  "12º",
  "13º",
  "14º",
  "15º",
];

place.forEach((object, index) => {
  tableElements[index].position = object;
});

const poligaContainer = document.querySelector("tbody");

function createTable() {
  tableElements.forEach((item) => {
    const lineTr = document.createElement("tr");

    const positionTable = document.createElement("td");
    const participantTable = document.createElement("td");
    const pointsTable = document.createElement("td");

    const positionText = document.createTextNode(item.position);
    const participantText = document.createTextNode(item.participant);
    const pointsText = document.createTextNode(item.points);

    poligaContainer.appendChild(lineTr);

    lineTr.appendChild(positionTable);
    lineTr.appendChild(participantTable);
    lineTr.appendChild(pointsTable);

    positionTable.appendChild(positionText);
    participantTable.appendChild(participantText);
    pointsTable.appendChild(pointsText);

    lineTr.classList.add("table-elements");

    positionTable.classList.add("position-col");
    participantTable.classList.add("participant-col");
    pointsTable.classList.add("points-col");
  });
}

createTable();
