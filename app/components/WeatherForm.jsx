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
                <div>
                    <input type="text" ref="city" placeholder="Unesi ime grada..."/>
                </div>
                <button>Submit</button>
            </form>
        );
    },
})

module.exports = WeatherForm;
