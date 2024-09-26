import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
const baseUrl_img = "https://image.tmdb.org/t/p/w500";
const baseUrl_api = "https://api.themoviedb.org/3/movie";
const apiKey = import.meta.env.VITE_API_KEY;

export default function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `${baseUrl_api}/${id}?api_key=${apiKey}&language=ko-KR`
        );
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
    <div className="detail-container">
      <div className="detail-wrap" key={detail.id}>
        <img
          className="detail-poster"
          src={baseUrl_img + detail.backdrop_path}
          alt={detail.title}
        />
        <div className="detail-text-wrap">
          <div className="detail-title-wrap">
            <div className="detail-title">{detail.title}</div>
            <div className="detail-vote-average">{detail.vote_average}</div>
          </div>
          <div className="detail-genres">
            {detail.genres.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
          <div className="detail-overview">{detail.overview}</div>
        </div>
      </div>
    </div>
  );
}
