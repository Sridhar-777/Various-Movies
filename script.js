  const movies = [
    { title: "The Hangover", genre: "comedy"},
    { title: "Scary Movie", genre: "comedy" },
    { title: "The Conjuring", genre: "horror" },
    { title: "Get Out", genre: "horror" },
    { title: "Pulp Fiction", genre: "crime" }
  ];
  
  
  function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.textContent = movie.title;
        
        moviesContainer.appendChild(movieElement);
    });
  }
  
  
  function filterMovies(genre) {
    if (genre === 'all') {
        return movies;
    } else {
        return movies.filter(movie => movie.genre === genre);
    }
  }
  
  displayMovies(movies);
  
  document.getElementById('genre').addEventListener('change', function() {
    const selectedGenre = this.value;
    const filteredMovies = filterMovies(selectedGenre);
    displayMovies(filteredMovies);
  });

   



