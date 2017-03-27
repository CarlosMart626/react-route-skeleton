var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Home () {
  return (
    <div>
      <h1>Github Battle</h1>
      <Link to='/page1'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
  </div>
  )
}

module.exports = Home;
