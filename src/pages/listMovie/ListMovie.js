import React from 'react';
import Card from '../../components/card/Card';
import './listMovie.css';
import { Link } from 'react-router-dom';
import FiltersBlock from '../../components/filtersBlock';

class ListMovie extends React.Component {

    state = {
        lightTheme: true
    };

    componentDidMount() {
        this.props.getUpdatedListMovie();
    }

    handleClick = () => {
        this.setState(state => ({
            lightTheme: !state.lightTheme
        }));
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
        const { lightTheme } = this.state;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className={lightTheme ? "listMovieContainer" : "listMovieContainerDark"}>
                <div className="listMovieHeader">
                    <h1>Фильмы</h1>
                    <FiltersBlock
                        handleFilterChange={this.handleFilterChange}
                        handleSearch={this.handleSearch}
                        isLightTheme={lightTheme}
                        handleClick={this.handleClick}
                    />
                </div>
                <div className="cardContainer">
                    {updatedListMovie.map(item =>
                        <Link to={`/movies/${item.id}`} key={item.id}>
                            <Card
                                style={item.background}
                                title={item.title}
                                image={posterIMG + item.poster_path}
                                description={item.release_date}
                                isLightTheme={lightTheme}
                            />
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default ListMovie;
