import React from 'react';
import './movieDetails.css';

class MovieDetails extends React.Component {

    componentDidMount() {
        const { match: { params: id } } = this.props.params;
        this.props.getMovieByIdDetails(id.id);
    }

    render() {
        const { movieByIdDetails } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="detailsWrapper">
                <img
                    src={posterIMG + movieByIdDetails.poster_path}
                    alt=""
                />
                <div className="detailsContent">
                    <h1>{movieByIdDetails.title}</h1>
                    <p>Дата релиза: {movieByIdDetails.release_date}</p>
                    <p>Рейтинг: {movieByIdDetails.vote_average}</p>
                    <h2>Обзор</h2>
                    <h3>{movieByIdDetails.overview}</h3>
                </div>
            </div>
        )
    }
}

export default MovieDetails;