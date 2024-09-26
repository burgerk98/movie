import MovieDetailData from "../../data/movieDetailData.json"
import "./MovieDetail.css"
const detail = MovieDetailData
const baseUrl = "https://image.tmdb.org/t/p/w500" 

export default function MovieDetail() {
  return (
    <div className="detail-container">
        <div className="detail-wrap"
            key={detail.id}
        >
            <img className="detail-poster"
                src={baseUrl+detail.backdrop_path}
                alt={detail.title}
            />
            <div className="detail-text-wrap">
                <div className="detail-title-wrap">
                    <div className="detail-title">
                        {detail.title}
                    </div>
                    <div className="detail-vote-average">
                        {detail.vote_average}
                    </div>
                </div>
                <div className="detail-genres">
                    {detail.genres.map((item)=> (
                        <div
                        key={item.id}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="detail-overview">
                    {detail.overview}
                </div>
            </div>
        </div>
    </div>
  )
}
