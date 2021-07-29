import React from 'react';
import Card from '../../components/card/Card';
import './listTvShow.css';
import { Link } from 'react-router-dom';

class ListTvShow extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

    render() {
        const { updatedListTvShow } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="listTvShowContainer">
                <h1>Сериалы</h1>
                {updatedListTvShow.map(item =>
                    <Link to={`/tv-shows/${item.id}`} key={item.id}>
                        <Card
                            title={item.name}
                            image={posterIMG + item.poster_path}
                            description={item.first_air_date}
                        />
                    </Link>
                )}
            </div>
        );
    }
}

export default ListTvShow;
