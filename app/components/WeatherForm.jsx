var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var city = this.refs.city.value;
        if (city.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(city);
        }
    },

    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="search" ref="city" placeholder="Search weather by city..."/>
                <button className="hollow expanded button">Get Weather</button>
            </form>
        );
    },
})

module.exports = WeatherForm;
