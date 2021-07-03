import PropTypes from 'prop-types';
import StatisticsItem from 'components/StatisticsItem';
import styles from './Statistics.module.css';

export default function Statistics({ title, items }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {items.map(item => (
          <StatisticsItem key={item.id} stats={item} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};
