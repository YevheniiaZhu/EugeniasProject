import React from 'react';
import './main.css';
import Buttons from '../../components/mainPage/Buttons';
import Wallpaper from '../../components/mainPage/Wallpaper';
import Slogan from '../../components/mainPage/Slogan';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Wallpaper />
                <Buttons />
                <Slogan />
            </div>
        );
    }
}

export default Main;
