const tableElements = [
  {
    participant: "Pedro",
    points: 1,
    position: "#º",
  },
  {
    participant: "Gabi",
    points: 2,
    position: "#º",
  },
  {
    participant: "Jorge",
    points: 3,
    position: "#º",
  },
  {
    participant: "Guilherme",
    points: 40,
    position: "#º",
  },
  {
    participant: "Mariana",
    points: 5,
  },
  {
    participant: "Wegna",
    points: 6,
    position: "#º",
  },
  {
    participant: "Jonatas",
    points: 7,
    position: "#º",
  },
  {
    participant: "Beto",
    points: 8,
    position: "#º",
  },
  {
    participant: "Yago",
    points: 9,
    position: "#º",
  },
  {
    participant: "Gustavo",
    points: 10,
    position: "#º",
  },
  {
    participant: "Amigo1",
    points: 11,
    position: "#º",
  },
  {
    participant: "Amigo2",
    points: 12,
    position: "#º",
  },
  {
    participant: "Amigo3",
    points: 13,
    position: "#º",
  },
  {
    participant: "Amigo4",
    points: 14,
    position: "#º",
  },
  {
    participant: "Amigo5",
    points: 15,
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
