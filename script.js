// JavaScript to dynamically populate the Premier League table
document.addEventListener("DOMContentLoaded", () => {
  const teams = [
    { pos: 1, name: "Manchester City", played: 30, won: 22, drawn: 5, lost: 3, gf: 72, gd: "+45", points: 71, color: "#6CABDD" },
    { pos: 2, name: "Arsenal", played: 30, won: 21, drawn: 6, lost: 3, gf: 70, gd: "+42", points: 69, color: "#EF0107" },
    { pos: 3, name: "Liverpool", played: 30, won: 20, drawn: 7, lost: 3, gf: 68, gd: "+39", points: 67, color: "#C8102E" },
    { pos: 4, name: "Aston Villa", played: 30, won: 18, drawn: 6, lost: 6, gf: 60, gd: "+25", points: 60, color: "#670E36" },
    { pos: 5, name: "Tottenham", played: 30, won: 17, drawn: 5, lost: 8, gf: 58, gd: "+19", points: 56, color: "#132257" },
    { pos: 6, name: "Manchester United", played: 30, won: 15, drawn: 6, lost: 9, gf: 50, gd: "+10", points: 51, color: "#DA291C" },
    { pos: 7, name: "Newcastle", played: 30, won: 14, drawn: 6, lost: 10, gf: 54, gd: "+12", points: 48, color: "#241F20" },
    { pos: 8, name: "West Ham", played: 30, won: 13, drawn: 7, lost: 10, gf: 47, gd: "+5", points: 46, color: "#7A263A" },
    { pos: 9, name: "Brighton", played: 30, won: 12, drawn: 8, lost: 10, gf: 45, gd: "+3", points: 44, color: "#0057B8" },
    { pos: 10, name: "Wolves", played: 30, won: 11, drawn: 7, lost: 12, gf: 41, gd: "-2", points: 40, color: "#FDB913" },
    { pos: 11, name: "Chelsea", played: 30, won: 11, drawn: 6, lost: 13, gf: 43, gd: "+1", points: 39, color: "#034694" },
    { pos: 12, name: "Fulham", played: 30, won: 10, drawn: 7, lost: 13, gf: 38, gd: "-3", points: 37, color: "#005BAC" },
    { pos: 13, name: "Bournemouth", played: 30, won: 10, drawn: 6, lost: 14, gf: 36, gd: "-5", points: 36, color: "#FF0000" },
    { pos: 14, name: "Crystal Palace", played: 30, won: 9, drawn: 8, lost: 13, gf: 35, gd: "-6", points: 35, color: "#009739" },
    { pos: 15, name: "Brentford", played: 30, won: 8, drawn: 9, lost: 13, gf: 33, gd: "-8", points: 33, color: "#D71920" },
    { pos: 16, name: "Everton", played: 30, won: 8, drawn: 8, lost: 14, gf: 32, gd: "-9", points: 32, color: "#00B2A9" },
    { pos: 17, name: "Nottingham Forest", played: 30, won: 7, drawn: 8, lost: 15, gf: 30, gd: "-12", points: 29, color: "#D00027" },
    { pos: 18, name: "Luton Town", played: 30, won: 6, drawn: 8, lost: 16, gf: 29, gd: "-15", points: 26, color: "#8A1538" },
    { pos: 19, name: "Burnley", played: 30, won: 5, drawn: 7, lost: 18, gf: 28, gd: "-20", points: 22, color: "#FFCD00" },
    { pos: 20, name: "Sheffield United", played: 30, won: 3, drawn: 7, lost: 20, gf: 25, gd: "-30", points: 16, color: "#FDB913" }
  ];

  const tableBody = document.getElementById("table-body");

  // Function to generate table rows
  function generateTableRows() {
    teams.forEach(team => {
      const row = document.createElement("tr");
      row.style.backgroundColor = team.color;

      row.innerHTML = `
        <td>${team.pos}</td>
        <td>${team.name}</td>
        <td>${team.played}</td>
        <td>${team.won}</td>
        <td>${team.drawn}</td>
        <td>${team.lost}</td>
        <td>${team.gf}</td>
        <td>${team.gd}</td>
        <td>${team.points

  
