var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Page2 = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page 2</h1>
                <Link to="/page1">Previous Page</Link>
            </div>
        );
    }
});

module.exports = Page2;
