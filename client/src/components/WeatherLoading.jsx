import React from 'react';

export default class WeatherLoading extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const skycons = new Skycons({ "color": "black" });
        skycons.play();
        skycons.add("loadingicon", Skycons.WIND);
    }

    render() {
        return (
            <div id="weatherloading">
                <canvas id="loadingicon" width="150" height="150"></canvas>
            </div>
        )
    }
}