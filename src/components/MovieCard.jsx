import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./movieCard.css";

const baseUrl_img = "https://image.tmdb.org/t/p/w500";
const baseUrl_api = "https://api.themoviedb.org/3/movie";
const apiKey = import.meta.env.VITE_API_KEY;

export default function MovieCard() {
  const [movieListData, setMovieListData] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `${baseUrl_api}/popular?api_key=${apiKey}&language=ko-KR`
        );
        const data = await response.json();
        setMovieListData(data.results);
      } catch (error) {
        console.error("못불러왔슈", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="card-container">
      {movieListData.map((item) => (
        <div
          className="card-wrap"
          key={item.id}
          onClick={() => handleCardClick(item.id)}
        >
          <img
            className="poster"
            src={baseUrl_img + item.poster_path}
            alt={item.title}
          />
          <div className="text-wrap">
            <h1 className="title">{item.title}</h1>
            <h2 className="vote-average">평점: {item.vote_average}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
