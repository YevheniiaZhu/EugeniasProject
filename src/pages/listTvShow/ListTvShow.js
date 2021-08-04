import React from 'react';
import Card from '../../components/card/Card';
import './listTvShow.css';
import { Link } from 'react-router-dom';
import FiltersBlock from '../../components/filtersBlock';

class ListTvShow extends React.Component {

    state = {
        lightTheme: true
    };

    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

    handleClick = () => {
        this.setState(state => ({
            lightTheme: !state.lightTheme
        }));
    }

        handleFilterChange = (value) => {
            switch (value) {
                case 'popular':
                    this.props.getListPopularTvShows();
                    break;
                case 'topRated':
                    this.props.getListTopRatedTvShows();
                    break;
                case 'nowPlaying':
                    this.props.getListNowPlayingTvShows();
                    break;
            }
        }

    handleSearch = (query) => {
        this.props.searchTvShow(query);
    }


    render() {
        const { updatedListTvShow } = this.props;
        const { lightTheme } = this.state;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className={lightTheme ? "listTvShowContainer" : "listTvShowContainerDark"}>
                <div className="listTvShowHeader">
                    <h1>Сериалы</h1>
                    <FiltersBlock
                        handleFilterChange={this.handleFilterChange}
                        handleSearch={this.handleSearch}
                        isLightTheme={lightTheme}
                        handleClick={this.handleClick}
                    />
                </div>
                <div className="cardContainer">
                {updatedListTvShow.map(item =>
                    <Link to={`/tv-shows/${item.id}`} key={item.id}>
                        <Card
                            title={item.name}
                            image={posterIMG + item.poster_path}
                            description={item.first_air_date}
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

export default ListTvShow;
