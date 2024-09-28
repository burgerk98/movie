import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";

const baseUrlImg = "https://image.tmdb.org/t/p/w500";
const baseUrlApi = "https://api.themoviedb.org/3/movie";
const apiKey = import.meta.env.VITE_API_KEY;

export default function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `${baseUrlApi}/${id}?api_key=${apiKey}&language=ko-KR`
        );

        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }

        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("영화 정보를 불러오는데 실패했습니다.", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!detail) return null;

  return (
    <div className="movie-detail">
      <div className="movie-detail__wrap" key={detail.id}>
        <img
          className="movie-detail__poster"
          src={baseUrlImg + detail.backdrop_path}
          alt={detail.title}
        />
        <div className="movie-detail__text-wrap">
          <div className="movie-detail__title-wrap">
            <div className="movie-detail__title">{detail.title}</div>
            <div className="movie-detail__vote-average">
              {detail.vote_average}
            </div>
          </div>
          <div className="movie-detail__genres">
            {detail.genres.map((item) => (
              <div key={item.id} className="movie-detail__genre-item">
                {item.name}
              </div>
            ))}
          </div>
          <div className="movie-detail__overview">{detail.overview}</div>
        </div>
      </div>
    </div>
  );
}
