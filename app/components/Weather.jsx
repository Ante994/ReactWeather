var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            temp: '34',
            city: 'Split'
        };
    },
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (city) {
        var that = this;
        debugger;
        this.setState({
            isLoading: true
        });
        openWeatherMap.getTemp(city).then(function (temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false,
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },

    render: function () {
        var {temp, city, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather ...</h3>;
            } else if (temp && city) {
                return <WeatherMessage temp={temp} city={city} />;
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                { renderMessage() }
            </div>
        );
    }
});

module.exports = Weather;
