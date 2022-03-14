
import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow({ films, key, onFaveToggle, isFave, handleDetailsClick }) {
  // const handleDetailsClick = (film) => {
  //   console.log(`fetching details for ${film}`);
  // };
  const posterUrl =
    "https://image.tmdb.org/t/p/w780/" + [films.poster_path];
  const date = new Date(films.release_date);
  const year = date.getFullYear();

  return (
    <div
      className="film-row"
      onClick={() => handleDetailsClick(films.title)}
    >
      <Poster alt={films.title} url={posterUrl} />
      <Fave onFaveToggle={() => {onFaveToggle(films)}} isFave={isFave} />

      <div className="film-summary">
        <h1>{films.title}</h1>
        <p>{year}</p>
      </div>
    </div>
  );
}

// class FilmRow extends Component {
//   handleDetailsClick = (film) => {
//     console.log(`fetching details for ${film}`);
//   };

//   render() {
//     const posterUrl =
//       "https://image.tmdb.org/t/p/w780/" + [this.props.films.poster_path];
//     const date = new Date(this.props.films.release_date);
//     const year = date.getFullYear();
//     return (
//       <div
//         className="film-row"
//         onClick={() => this.handleDetailsClick(this.props.films.title)}
//       >
//         <Poster alt={this.props.films.title} url={posterUrl} />

//         <div className="film-summary">
//           <Fave />
//           <h1>{this.props.films.title}</h1>
//           <p>{year}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default FilmRow;
