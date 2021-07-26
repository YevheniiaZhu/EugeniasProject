import React from 'react';
import Card from '../../components/Card/Card';
import './listMovie.css';


const listMovieCard = [
    {
        title: "List Movie Title",
        image: "https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764",
        description: "List Movie Description"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1 List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1 "
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },
    {
        title: "List Movie Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Movie Description1"
    },

]

class ListMovie extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListMovie();
    }

    render() {
        return (
            <div className="listMovieContainer">
                <h1>List Movie</h1>
                {listMovieCard.map(item =>
                    <Card
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                )}
            </div>

        );
    }
}

export default ListMovie;
