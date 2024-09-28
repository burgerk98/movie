import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import "./movieCard.css";

const baseUrlImg = "https://image.tmdb.org/t/p/w500";
const baseUrlApi = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

export default function MovieCard({ searchTerm }) {
  const [movieListData, setMovieListData] = useState([]);
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `${baseUrlApi}/movie/popular?api_key=${apiKey}&language=ko-KR`;

        if (debouncedSearchTerm) {
          url = `${baseUrlApi}/search/movie?api_key=${apiKey}&query=${debouncedSearchTerm}&language=ko-KR`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }

        const data = await response.json();
        setMovieListData(data.results);
      } catch (error) {
        console.error("영화를 불러오는 데 실패했습니다.", error);
        setMovieListData([]);
      }
    };

    fetchMovies();
  }, [debouncedSearchTerm]);

  return (
    <div className="movie-card__container">
      {movieListData.length > 0 ? (
        movieListData.map((item) => (
          <div
            className="movie-card__wrap"
            key={item.id}
            onClick={() => handleCardClick(item.id)}
          >
            <img
              className="movie-card__poster"
              src={baseUrlImg + item.poster_path}
              alt={item.title}
            />
            <div className="movie-card__text-wrap">
              <h1 className="movie-card__title">{item.title}</h1>
              <h2 className="movie-card__vote-average">
                평점: {item.vote_average}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <h3 className="no-results">검색결과가 없습니다</h3>
      )}
    </div>
  );
}
