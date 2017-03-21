var React = require('react');

// var WeatherMessage= React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <div>It is {temp} in {location}</div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
//  var {temp, location} = props;
  return (
    <div>It is {temp} in {location}</div>
  );
};

module.exports = WeatherMessage;
