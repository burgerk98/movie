import { useNavigate } from "react-router-dom";
import movieListDatas from "../../data/movieListData.json";
import "./MovieCard.css";
const movieListData = movieListDatas.results;
const baseUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieCard() {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/details");
  };
  return (
    <div className="card-container">
      {movieListData.map((item) => (
        <div className="card-wrap" key={item.id} onClick={handleCardClick}>
          <img
            className="poster"
            src={baseUrl + item.poster_path}
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
