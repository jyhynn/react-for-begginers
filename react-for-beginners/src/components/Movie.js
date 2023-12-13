import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, title, summary, genres, id, isList}){
  console.log(coverImg, title, summary, genres, id, isList)
    return (
        <div>
              <h2>
                {isList ? (<Link to={`/movie/${id}`}>{title}</Link>) : {title}}
              </h2>
              <img src={coverImg} alt={title}/>
              <p>{summary}</p>
              <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
              
              </ul>
            </div>
    )
}

Movie.propTypes ={
    id: PropTypes.number,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    isList: PropTypes.bool
}
export default Movie;