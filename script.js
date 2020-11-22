const players = ["Light", "Crash"];

var data = [];

function startGame(){
  for (let i = 0; i < players.length; i++) {
    data.push({rank: i+1, team: 'SOLO', name: players[i], hp: 100, weapon: 'Fists'})
  };
  
  for (let i = 0; i < data.length; i++) {
    const tBody = document.getElementById("PlayerTableBody");
    const tRow = document.createElement("tr");
    tBody.appendChild(tRow);
    
    for (let x in data[i]) {
      const td = document.createElement("td");
      tRow.appendChild(td);
      td.innerHTML = data[i][x];
    };
  };
};
