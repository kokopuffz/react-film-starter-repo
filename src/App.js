import "./App.css";
import FilmList from "./FilmList";
import Details from "./Details.jsx";
import TMDB from "./TMDB";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// require('dotenv').config();

export default function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

  console.log(popularFilmsUrl);

  const handleDetailsClick = (film) => {
    console.log(`handledeetsclick from app ${film}`);
    setCurrent(film);
  };

  // useEffect(() => {
  //   console.log("UseEffect is firing!");
  //   fetch(popularFilmsUrl)
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       console.log(jsonData.results);
  //       setFilms(jsonData.results);
  //     });
  // }, []);

  useEffect(() =>{
    axios.get(popularFilmsUrl)
      .then(response =>{
        setFilms(response.data.results)
      })
  }, [])

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />

      <Details films={current} />
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
