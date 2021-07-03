import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

export default function StatisticsItem({ stats }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}&#37;</span>
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
