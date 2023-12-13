import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    console.log(movieId)
    const getMovie = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
        ).json();
        // console.log(json)
        setMovie(json.data.movie); 
    }, [movieId])

    useEffect(()=>{
        getMovie();
    },[getMovie]);
    console.log(movie) 
    return (
        <div>
            <h1>Detail</h1>
            <h2>{movie.id}</h2>
            <h2>{movie.medium_cover_image}</h2>
            <h2>{movie.title}</h2>
            <h2>{movie.summary}</h2>
            <h2>{movie.genres}</h2>
            {/* <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                isList={false}
            /> */}
        </div>
    );
}

export default Detail;