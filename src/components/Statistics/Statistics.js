import PropTypes from 'prop-types';
import StatisticsItem from 'components/StatisticsItem';
import s from './Statistics.module.css';

export default function Statistics({ title, items }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
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
