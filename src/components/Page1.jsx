var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Page1 = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page 1</h1>
                <Link to="/page2">Next Page</Link>
            </div>
        );
    }
});

module.exports = Page1;
