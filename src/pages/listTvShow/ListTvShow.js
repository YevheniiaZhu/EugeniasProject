import React from 'react';
import Card from '../../components/card/Card';
import './listTvShow.css';

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
                    <Card
                        key={item.id}
                        title={item.name}
                        image={posterIMG + item.poster_path}
                        description={item.first_air_date}
                    />
                )}
            </div>
        );
    }
}

export default ListTvShow;
