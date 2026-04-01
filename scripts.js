const movies = [
  "Bhurtha Mahasayulaku Wignyapthi (2026)",
  "Mass Jathara (2025)",
  "Mr. Bachchan (2024)",
  "Eagle (2024)",
  "Sundaram Master (2024)",
  "Waltair Veerayya (2023)",
  "Ravanasura (2023)",
  "Tiger Nageswara Rao (2023)",
  "Dhamaka (2022)",
  "Rama Rao on Duty (2022)",
  "Khiladi (2022)",
  "Disco Raja (2020)",
  "Nela Ticket (2018)",
  "Amar Akbar Anthony (2018)",
  "Raja the Great (2017)",
  "Balupu (2013)",
  "Power (2014)",
  "Khadgam (2002)"
  // Add more films as needed
];

const container = document.querySelector(".movies-grid");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `<h3>${movie}</h3>`;
  container.appendChild(card);
});
