function recommendMovie() {
  let genre = document.getElementById("genre").value;
  let mood = document.getElementById("mood").value;

  let result = "";

  if (genre === "action" && mood === "happy") {
    result = "Watch Spider-Man: No Way Home 🕷️";
  } else if (genre === "action" && mood === "sad") {
    result = "Watch Logan 🐺";
  } else if (genre === "comedy" && mood === "happy") {
    result = "Watch Barbie 💖";
  } else if (genre === "comedy" && mood === "sad") {
    result = "Watch Edward Scissorhands ✂️";
  } else if (genre === "drama" && mood === "sad") {
    result = "Watch Interstellar 🌌";
  } else if (genre === "drama" && mood === "relaxed") {
    result = "Watch La La Land 🎶";
  } else {
    result = "Watch Inception 🧠";
  }

  document.getElementById("movieResult").innerText = result;
}

function logicalMovie() {
  let genre = document.getElementById("logicGenre").value;
  let result = "";

  if (genre === "action") {
    result = "Watch Avatar 🔥";
  } else if (genre === "comedy") {
    result = "Watch Legally Blonde 💅";
  } else if (genre === "drama") {
    result = "Watch 20th Century Girl 🎥";
  } else if (genre === "romance") {
    result = "Watch Me Before You 🐝";
  } else if (genre === "horror") {
    result = "Watch Scream 👻";
  } else {
    result = "No match.";
  }

  document.getElementById("logicResult").innerText = result;
}

class Movie {
  constructor(title) {
    this.title = title;
    this.watched = false;
  }

  toggleWatched() {
    this.watched = !this.watched;
  }
}

class MovieList {
  constructor() {
    this.movies = [];
  }

  add(title) {
    const movie = new Movie(title);
    this.movies.push(movie);
    this.render();
  }

  remove(index) {
    this.movies.splice(index, 1);
    this.render();
  }

  toggle(index) {
    this.movies[index].toggleWatched();
    this.render();
  }

  render() {
    const list = document.getElementById("movieList");
    list.innerHTML = "";

    this.movies.forEach((movie, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${movie.title} ${movie.watched ? "✅" : ""}
        <button onclick="movieList.toggle(${index})">Watch</button>
        <button onclick="movieList.remove(${index})">Delete</button>
      `;

      list.appendChild(li);
    });
  }
}

const movieList = new MovieList();

function addMovie() {
  const input = document.getElementById("movieInput");
  const title = input.value.trim();

  if (title === "") return;

  movieList.add(title);
  input.value = "";
}

const movies = [
  { title: "Interstellar 🌌", genre: "drama", rating: 9 },
  { title: "Barbie 💖", genre: "comedy", rating: 7 },
  { title: "La La Land 🎶", genre: "drama", rating: 8 },
  { title: "Scream 👻", genre: "horror", rating: 6 },
  { title: "Spider-Man: No Way Home 🕷️", genre: "action", rating: 9 },
  { title: "The Notebook 📓", genre: "romance", rating: 8 },
  { title: "Titanic 🚢", genre: "romance", rating: 9 },
  { title: "Avengers: Endgame 👊", genre: "action", rating: 9 },
  { title: "Joker 🤡", genre: "drama", rating: 8 },
  { title: "Frozen ❄️", genre: "comedy", rating: 7 },
  { title: "Get Out 🪑", genre: "horror", rating: 8 },
  { title: "The Conjuring 👹", genre: "horror", rating: 8 },
  { title: "Inception 🧠", genre: "action", rating: 9 },
  { title: "Mean Girls 💄", genre: "comedy", rating: 7 },
  { title: "Pride and Prejudice 👒", genre: "romance", rating: 8 },
  { title: "The Pursuit of Happyness 👦🏾", genre: "drama", rating: 9 },
  { title: "Black Panther 🖤", genre: "action", rating: 8 },
  { title: "It 🎈", genre: "horror", rating: 7 },
  { title: "Clueless 📒", genre: "comedy", rating: 7 },
  { title: "A Walk to Remember 🌺", genre: "romance", rating: 8 },
];

function renderMovies(list) {
  const ul = document.getElementById("functionalList");
  ul.innerHTML = "";

  list.map((movie) => {
    const li = document.createElement("li");
    li.textContent = `${movie.title} - ${movie.genre} (${movie.rating})`;
    ul.appendChild(li);
  });
}

function showDrama() {
  const filtered = movies.filter((m) => m.genre === "drama");
  renderMovies(filtered);
}

function showTopRated() {
  const filtered = movies.filter((m) => m.rating >= 8);
  renderMovies(filtered);
}

function showRandom() {
  const random = movies[Math.floor(Math.random() * movies.length)];
  renderMovies([random]);
}

function showAll() {
  renderMovies(movies);
}

const ratedMovies = [];

function addMovieRating() {
  const movieName = document.getElementById("ratedMovieName").value.trim();
  const rating = Number(document.getElementById("starRating").value);

  if (movieName === "") {
    return;
  }

  ratedMovies.push({
    title: movieName,
    rating: rating
  });

  renderMovieRatings();

  document.getElementById("ratedMovieName").value = "";
  document.getElementById("starRating").value = "1";
}

function renderMovieRatings() {
  const list = document.getElementById("ratingList");
  list.innerHTML = "";

  ratedMovies.forEach(movie => {
    const li = document.createElement("li");
    const stars = "⭐".repeat(movie.rating);

    li.textContent = `${movie.title} — ${stars}`;
    list.appendChild(li);
  });
}

function generateInputs() {
  const count = Number(document.getElementById("movieCount").value);
  const container = document.getElementById("movieInputs");

  container.innerHTML = "";

  if (count <= 0) {
    document.getElementById("runtimeResult").innerText =
      "Please enter a valid number of movies.";
    return;
  }

  for (let i = 0; i < count; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = `Minutes for movie ${i + 1}`;
    input.className = "movie-time";
    input.min = "1";
    container.appendChild(input);
  }

  document.getElementById("runtimeResult").innerText = "";
}

function calculateRuntime() {
  const inputs = document.querySelectorAll(".movie-time");

  if (inputs.length === 0) {
    document.getElementById("runtimeResult").innerText =
      "Create the movie inputs first.";
    return;
  }

  let totalMinutes = 0;

  inputs.forEach((input) => {
    totalMinutes += Number(input.value) || 0;
  });

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  document.getElementById(
    "runtimeResult"
  ).innerText = `🎬 Total watch time: ${hours}h ${minutes}m`;
}

const cvData = {
  name: "Ariadna Rosario Caban",
  email: "ariadna.rosario@upr.edu",
  phone: "939-203-3332",
  location: "Puerto Rico",

  summary:
    "Hardworking Computer Science student with customer service experience and strong communication, organizational, and problem-solving skills. Ready to contribute and grow in the tech field.",

  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Puerto Rico - Mayaguez",
      year: "Expected 2027",
      show: true,
    },
  ],

  skills: [
    { name: "Customer Service", show: true },
    { name: "POS Systems", show: true },
    { name: "Cash Handling", show: true },
    { name: "Sales Techniques", show: true },
    { name: "Inventory Management", show: true },
    { name: "C++", show: true },
    { name: "Python", show: true },
    { name: "JavaScript", show: true },
  ],

  languages: [
    { name: "Spanish - C2 (Proficient)", show: true },
    { name: "English - Native/Bilingual", show: true },
  ],

  experience: [
    {
      title: "Supermarket Cashier",
      company: "Nicky's Supermarket",
      years: "2022 - 2024",
      description:
        "Provided efficient cashiering, handled transactions, assisted customers, and supported inventory control.",
      show: true,
    },
    {
      title: "Supermarket Cashier",
      company: "Econo",
      years: "2025 - present",
      description:
        "Provided efficient cashiering, handled transactions, assisted customers.",
      show: true,
    },
  ],

  projects: [
    {
      title: "Smart Academic Task Planner",
      show: true,
    },
  ],
};

function loadCV() {
  const cv = cvData;

  let html = `
    <div class="resume-content">
      <h2>${cv.name}</h2>
      <p><strong>Email:</strong> ${cv.email}</p>
      <p><strong>Phone:</strong> ${cv.phone}</p>
      <p><strong>Location:</strong> ${cv.location}</p>

      <h3>Professional Summary</h3>
      <p>${cv.summary}</p>

      <h3>Education</h3>
      <ul>
  `;

  cv.education.forEach((item) => {
    if (item.show) {
      html += `<li>${item.degree} - ${item.school} (${item.year})</li>`;
    }
  });

  html += `</ul><h3>Skills</h3><ul>`;

  cv.skills.forEach((skill) => {
    if (skill.show) {
      html += `<li>${skill.name}</li>`;
    }
  });

  html += `</ul><h3>Languages</h3><ul>`;

  cv.languages.forEach((lang) => {
    if (lang.show) {
      html += `<li>${lang.name}</li>`;
    }
  });

  html += `</ul><h3>Work Experience</h3><ul>`;

  cv.experience.forEach((job) => {
    if (job.show) {
      html += `<li><strong>${job.title}</strong> - ${job.company} (${job.years})<br>${job.description}</li>`;
    }
  });

  html += `</ul><h3>Projects</h3><ul>`;

  cv.projects.forEach((project) => {
    if (project.show) {
      html += `<li>${project.title}</li>`;
    }
  });

  html += `
      </ul>
    </div>
  `;

  document.getElementById("cv-container").innerHTML = html;
}
