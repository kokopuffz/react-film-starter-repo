import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow({ film, onFaveToggle }) {
return (
  <>
    <Fave films={film} onFaveToggle={onFaveToggle} isFave={isFave} />
    <p>wtf goes here</p>
  </>
);
}

// class FilmRow extends Component {

//   handleDetailsClick =(film) => {
//     console.log(`fetching details for ${film}`)
//   }

//   render() {
//     const posterUrl =
//       "https://image.tmdb.org/t/p/w780/" + [this.props.films.poster_path];
//     const date = new Date(this.props.films.release_date);
//     const year = date.getFullYear();
//     return (
//       <div className="film-row" onClick = {() => this.handleDetailsClick(this.props.films.title)}>
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
