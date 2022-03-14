import "./App.css";
import React from "react";
import TMDB from "./TMDB";
import FilmList from "./FilmList";
import { useState } from "react";
import Details from './Details'
import Poster from "./Poster"
// import Fave from './Fave'
// import FilmRow from "./FilmRow";

function App() {

  const [current, setCurrent] = useState({});
  //list of all the faves
  const [films, setFilms] = useState(TMDB.films);


  //make selected film the new currentpick
  const selectedFilm = (idx) => {
    setCurrent({current: idx});
    console.log('SELECTED @APPS', idx)
  }
  

  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} 
          // filter={filter}
          // onFilterClick={handleFilterClick}
          // onFaveclick={handleFaveClick}
        />
        <Details current={current} />
      </div>
    </div>
  );
} 

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList films={TMDB.films} />

//         <Details films={TMDB.films} />
//       </div>
//     );
//   }
// }

// export default App;
