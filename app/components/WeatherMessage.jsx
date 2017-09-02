var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <div>
            <h1>In {city} is {temp}!</h1>
        </div>
    );
}

// ovo mozemo smatrati kao retrun u funkcijama
module.exports = WeatherMessage;
