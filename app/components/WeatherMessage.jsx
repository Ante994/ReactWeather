var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h1 className="text-center">In {city} is {temp}!</h1>
    );
}

// ovo mozemo smatrati kao retrun u funkcijama
module.exports = WeatherMessage;
