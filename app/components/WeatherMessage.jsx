var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h1 className="text-center">In {city} is {temp}!</h1>
    );
}

module.exports = WeatherMessage;
