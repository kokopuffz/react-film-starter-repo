import "./App.css";
import FilmList from "./FilmList";
import Details from "./Details.jsx";
import TMDB from "./TMDB";
import { useState } from "react";

export default function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = (film) => {
    console.log(`handledeetsclick from app ${film}`);
    setCurrent(film)
  };

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />

      <Details films={films} current={current} />
    </div>
  );
}

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
