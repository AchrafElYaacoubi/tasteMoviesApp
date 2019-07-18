import React from 'react';
import { connect } from "react-redux";
import { getMovieInfo } from "../redux/movies/actions";


class Movie extends React.Component {

  componentDidMount () {
    this.props.getMovieInfo(this.props.match.params.id)
  }

  render() {
    const { movie } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          {movie.poster && <img src={require("../assets/images/" + movie.poster)} alt="movie poster" />}
          </div>
          <div className="col-md-9">
            <h3 className="my-3">{ movie.title }</h3>
            <p>{ movie.synopsis }</p>
            <ul>
              <li><span className="font-weight-bold">Genre: </span>{ movie.genre }</li>
              <li><span className="font-weight-bold">Directed by: </span>{ movie.directedBy }</li>
              <li><span className="font-weight-bold">Written by: </span>{ movie.writtenBy }</li>
              <li><span className="font-weight-bold">Studio: </span>{ movie.studio }</li>
              <li><span className="font-weight-bold">Box office: </span>{ movie.boxOffice }</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.movie
});
  
export default connect(
  mapStateToProps,
  { getMovieInfo }
)(Movie);