

export default function Details(current, filmIndex) {
  const onSelectedFilm = (film) => {
    console.log(`fetching details for ${film.title}`);
  };
  const posterUrl = "https://image.tmdb.org/t/p/w780/" + [film.poster_path];
  const date = new Date(film.release_date);
  const year = date.getFullYear();

  return (
    <div className="film-row" onClick={() => onSelectedFilm(film)}>
      <Poster alt={film.title} url={posterUrl} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave />
    </div>
  );
  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
    </div>
  );
}

// import React, { Component } from 'react'

// class Details extends Component {
//   state = {  }
//   render() {
//     return (
//       <div className="film-details">
//         <h1 className="section-title">DETAILS</h1>
//       </div>
//     );
//   }
// }
// export default Details;
