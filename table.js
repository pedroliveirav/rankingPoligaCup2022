const tableElements = [
  {
    participant: "Beto",
    points: 85,
    position: "#º",
  },
  {
    participant: "Danilo",
    points: 70,
    position: "#º",
  },
  {
    participant: "Eduardo",
    points: 55,
    position: "#º",
  },
  {
    participant: "Gabi",
    points: 70,
    position: "#º",
  },
  {
    participant: "Gabriel",
    points: 69,
  },
  {
    participant: "Guilherme",
    points: 78,
    position: "#º",
  },
  {
    participant: "Gustavo",
    points: 89,
    position: "#º",
  },
  {
    participant: "Henrique",
    points: 98,
    position: "#º",
  },
  {
    participant: "Jonatas",
    points: 94,
    position: "#º",
  },
  {
    participant: "Jorge",
    points: 68,
    position: "#º",
  },
  {
    participant: "Marcelo",
    points: 91,
    position: "#º",
  },
  {
    participant: "Mariana",
    points: 82,
    position: "#º",
  },
  {
    participant: "Pedro",
    points: 77,
    position: "#º",
  },
  {
    participant: "Wegna",
    points: 101,
    position: "#º",
  },
  {
    participant: "Yago",
    points: 77,
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
