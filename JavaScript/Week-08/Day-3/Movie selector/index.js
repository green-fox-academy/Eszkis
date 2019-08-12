let genres = [["Sci-fi", "Moon", "2001 Space odessy", "Contact",], ["Drama", "Darkest hour", "There will be blood", "American beauty"], ["Comedy", "Airplane!", "Deadpool", "Wayne's World"]];
let movies = ["Moon", "2001 Space odessy", "Contact", "Darkest hour", "There will be blood", "American beauty", "Airplane!", "Deadpool", "Wayne's World"];
let movieList = document.querySelector('#movie');
let genre = document.querySelector('#Genre');
let pTag = document.querySelector('p');

genre.addEventListener('change', () => {
  while (movieList.childElementCount > 1) {
    movieList.removeChild(movieList.lastChild)
  }
  genres.forEach(list => {
    if (list[0] === genre.value) {
      list.forEach(element => {
        if (list.indexOf(element) !== 0) {
          let newElement = document.createElement('option');
          newElement.setAttribute('value', element);
          newElement.innerText = element;
          movieList.appendChild(newElement);
        }
      });
    }
  });
});

movieList.addEventListener('change', () => {
  pTag.innerText = `The selected movie is: ${movieList.value}`
});