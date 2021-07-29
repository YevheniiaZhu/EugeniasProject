import React from 'react';
import './tvShowDetails.css'

class TvShowDetails extends React.Component {

    componentDidMount() {
        const { match: { params: id } } = this.props.params;
        this.props.getTvShowByIdDetails(id.id);
    }

    render() {
        const { tvShowByIdDetails } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="detailsWrapper">
                <img
                    src={posterIMG + tvShowByIdDetails.poster_path}
                    alt=""
                />
                <div className="detailsContent">
                    <h1>{tvShowByIdDetails.name}</h1>
                    <p>Дата релиза: {tvShowByIdDetails.first_air_date}</p>
                    <p>Рейтинг: {tvShowByIdDetails.vote_average}</p>
                    <h2>Обзор</h2>
                    <h3>{tvShowByIdDetails.overview}</h3>
                </div>
            </div>
        )
    }
}

export default TvShowDetails;