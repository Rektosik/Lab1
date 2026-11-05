import PropTypes from 'prop-types';
import './TrafficLights.css';

function Light({ color }) {
  return <div className={`light light--${color}`} aria-label={color} />;
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Light;