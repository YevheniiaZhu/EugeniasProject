import React from 'react';
import '../../pages/main/main.css';
import {Link} from 'react-router-dom';

class Buttons extends React.Component {
    render() {
        return (
            <div className='buttons'>
                <button className='button'>
                    <Link to='/movies' className='buttonLink'>фильмы</Link>
                </button>
                <button>
                    <Link to='/tv-shows' className='buttonLink'>сериалы</Link>
                </button>
            </div>
        );
    }
}

export default Buttons;
