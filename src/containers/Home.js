import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMovies, findMovies } from "../redux/movies/actions";
import MovieCard from '../components/MovieCard';
import Form from '../components/Form'

class Home extends Component {

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return(
      <React.Fragment>
        <Form onSubmit={this.props.findMovies} />
        <div className="container">
          <MovieCard movies={this.props.movies}/>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});
  
export default connect(
  mapStateToProps,
  { getMovies, findMovies }
)(Home);