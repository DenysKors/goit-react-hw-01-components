import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatsList = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: getRandomHexColor() }} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
