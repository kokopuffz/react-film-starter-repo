export default function Details({films }) {
  const filmInfo = (
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${films.backdrop_path}`}
          alt={`Screenshot from the film ${films.title}`}
        />
        <h1 className="film-title">{films.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{films.tagline}</h2>
        <p className="film-detail-overview">
          <img
            src={`https://image.tmdb.org/t/p/w780/${films.poster_path}`}
            className="film-detail-poster"
            alt={films.title}
          />
          {films.overview}
        </p>
      </div>
    </div>
  );

  const emptyInfo = (
    <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  );

  let details = films.id ? filmInfo : emptyInfo;
  console.log("DETAILS", films)

  return (
    <>
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}
    </div>
    </>
  );
}

// class Details extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="film-details">
//         <h1 className="section-title">DETAILS</h1>
//       </div>
//     );
//   }
// }
// export default Details;
