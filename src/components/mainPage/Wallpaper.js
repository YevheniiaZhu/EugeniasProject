import React from 'react';
import '../../pages/main/main.css';
import wallpaper from './../../assets/img/wallpaper.jpeg';
import cat from './../../assets/img/cat_main.png';


class Wallpaper extends React.Component {
    render() {
        return (
            <div>
                <img className='wallpaper' src={wallpaper} alt='wallpaper'/>
                <img className='cat' src={cat} alt='cat'/>
            </div>
        );
    }
}

export default Wallpaper;
