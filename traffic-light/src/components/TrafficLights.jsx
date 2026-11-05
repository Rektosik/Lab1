import Light from './Light.jsx';
import './TrafficLights.css';
import PropTypes from 'prop-types';

const COLORS = ['red', 'yellow', 'green'];

function TrafficLights({ orientation = 'vertical' }) {
  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      {COLORS.map((color) => (
        <Light key={color} color={color} />
      ))}
    </div>
  );
}

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default TrafficLights;