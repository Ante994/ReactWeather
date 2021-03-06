var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    onSearch (e) {
        e.preventDefault();
        var city = this.refs.search.value;
        var encodedCity = encodeURIComponent(city);
        console.log(encodedCity);
        if (city.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedCity;
        }
    };
    render () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="search" placeholder="Search weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get wheather!"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    };
}

module.exports = Nav;
