import FilmRow from "./FilmRow";
import { useState } from "react";
import Fave from "./Fave";

export default function FilmList({ films, onFaveToggle, handleDetailsClick }) {
  const [filter, setFilter] = useState("all");
  const [faves, setFaves] = useState([]);

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  const handleFaveToggle = (film) => {
    console.log("FILMLIST handleFaveToggle");
    let newFaves = [...faves];
    faves = setFaves[newFaves];

    const filmIndex = faves.indexOf(film);
    filmIndex < 0
      ? (newFaves = [...newFaves, film])
      : newFaves.splice(filmIndex, 1);
    setFaves(newFaves);
  };

  const filmsToDisplay = filter === 'faves' ? faves : films
  
  const allFilms = filmsToDisplay.map((film, i) => {
    return <FilmRow films={film} key={`FilmRow-${i}`} onFaveToggle={handleFaveToggle} isFave={faves.includes(film)} handleDetailsClick={handleDetailsClick}/>
  })
  

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${
            filter === "all" ? "is-active" : ""
          }`}
          onClick={() => handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filter === "faves" ? "is-active" : ""
          }`}
          onClick={() => handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      
      {/* {filmsToDisplay} */}
      {allFilms}
    </div>
  );
}

// class FilmList extends Component {
//   state = {
//     filter: "all",
//   };

//   handleFilterClick = (filter) => {
//     this.setState({
//       filter: filter,
//     });
//     console.log(this.state.filter);
//   };

//   render() {
//     const allFilms = this.props.films.map((film) => {
//       return <FilmRow films={film} />;
//     });

//     return (
//       <div className="film-list">
//         <h1 className="section-title">FILMS</h1>
//         <div className="film-list-filters">
//           <div
//             className={`film-list-filter ${
//               this.state.filter === "all" ? "is-active" : ""
//             }`}
//             onClick={() => this.handleFilterClick("all")}
//           >
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//           </div>
//           <div
//             className={`film-list-filter ${
//               this.state.filter === "faves" ? "is-active" : ""
//             }`}
//             onClick={() => this.handleFilterClick("faves")}
//           >
//             FAVES
//             <span className="section-count">0</span>
//           </div>
//         </div>

//         {allFilms}
//       </div>
//     );
//   }
// }

// export default FilmList;
