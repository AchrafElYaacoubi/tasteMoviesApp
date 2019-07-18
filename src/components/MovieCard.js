import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {

    var moviesList = props.movies.map(function(movie){
      return (
          <div className="col-md-3">
            <div className="card mb-3 shadow-sm">
              <Link to={{ pathname: `/movies/${movie._id}`, state: { image_url: movie.poster} }} >
              <img className="card-img-top" src={require('../assets/images/'+ movie.poster) } alt="movie poster" />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">{ movie.title }</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Year: <span className="text-dark">{ movie.year }</span></small>
                  <small className="text-muted"> Likes: <span className="text-primary">{ movie.likes }</span></small>
                  <small className="text-muted"> Rating: <span className="text-success">{ movie.rating }</span>/10</small>
                </div>
              </div>
            </div>
          </div>
      )
    })
    
    return (
      <div className="row" >
        {moviesList}
      </div>
      
    );
  }

export default MovieCard;
