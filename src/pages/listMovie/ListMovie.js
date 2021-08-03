import React from 'react';
import Card from '../../components/card/Card';
import './listMovie.css';
import { Link } from 'react-router-dom';
import FiltersBlock from '../../components/filtersBlock';

class ListMovie extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListMovie();
    }

    handleFilterChange = (value) => {
        switch (value) {
            case 'popular':
                this.props.getListPopularMovies();
                break;
            case 'topRated':
                this.props.getListTopRatedMovies();
                break;
            case 'nowPlaying':
                this.props.getListNowPlayingMovies();
                break;
        }
    }

    handleSearch = (query) => {
        this.props.searchMovie(query);
    }

    render() {
        const { updatedListMovie } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="listMovieContainer">
                <div className="listMovieHeader">
                    <h1>Фильмы</h1>
                    <FiltersBlock
                        handleFilterChange={this.handleFilterChange}
                        handleSearch={this.handleSearch}
                    />
                </div>
                {updatedListMovie.map(item =>
                    <Link to={`/movies/${item.id}`} key={item.id}>
                        <Card
                            title={item.title}
                            image={posterIMG + item.poster_path}
                            description={item.release_date}
                        />
                    </Link>
                )}
            </div>
        );
    }
}

export default ListMovie;
