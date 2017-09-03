var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var city = this.refs.city.value;
        if (city.length > 0) {
            this.refs.city.value = '';
            console.log(this.props);
            this.props.onSearch(city);
        }
    },

    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="city" placeholder="Enter location name..."/>
                <button className="hollow expanded button">Get Weather</button>
            </form>
        );
    },
})

module.exports = WeatherForm;
