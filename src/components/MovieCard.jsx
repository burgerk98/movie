import movieListDatas from "../../data/movieListData.json";
import "./MovieCard.css";
const movieListData = movieListDatas.results;
const baseUrl = "https://image.tmdb.org/t/p/w500" 

export const MovieCard = () => {
  return (
    <div className="card-container">{movieListData.map((item) => (
        <div
          className="card-wrap"
          key={item.id}
        >
            <img className="poster"
            src={baseUrl+item.poster_path}
            alt={item.title}
            />
            <div className="text-wrap">
                <h1 className="title">{item.title}</h1>
                <h2 className="vote-average">평점: {item.vote_average}</h2>
            </div>
        </div>))}
    </div>
  )
}
