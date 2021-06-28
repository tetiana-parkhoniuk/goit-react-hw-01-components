import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

export default function StatisticsItem({ stats }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{stats.label}</span>
      <span className={s.percentage}>{stats.percentage}&#37;</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
