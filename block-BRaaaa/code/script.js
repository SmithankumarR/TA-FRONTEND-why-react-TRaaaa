function main() {
  let input = document.querySelector(`input[type="text"]`);
  let rootElm = document.querySelector('.movieList');

  let allMovies = [
    {
      name: 'Inception',
      watched: true,
    },
    {
      name: 'Harry Potter and Series',
      watched: false,
    },
    {
      name: 'Avengers Complete Series',
      watched: false,
    },
  ];

  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      allMovies.push({
        name: event.target.value,
        watched: false,
      });
      event.target.value = '';
      createMovieUI();
    }
  });

  function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
  }

  function createMovieUI() {
    allMovies.forEach((movie, i) => {
      let list = document.createElement('li');
      list.classList.add('list');

      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = movie.watched;
      checkbox.classList.add('movieName');

      let movieName = document.createElement('h3');
      console.log(movie.name);
      movieName.innerText = movie.name;
      movieName.classList.add('movieName');

      // create watch section
      let watched = document.createElement('p');
      watched.innerText = 'Watch';

      watched.addEventListener('click', () => {
        if (watched.innerText === 'watch') {
          watched.innerText = 'Watched';
          watched.style.color = 'green';
        } else {
          watched.innerText = 'watch';
          watched.style.color = 'red';
        }
      });

      //   delete movie
      let span = document.createElement('span');
      span.innerText = 'X';
      span.style.color = 'red'
      span.setAttribute('data-id', i);
      span.addEventListener('click', deleteMovie);

      list.append(checkbox, movieName, watched, span);

      rootElm.append(list);
    });
    allMovies = [];
  }
}
main();
