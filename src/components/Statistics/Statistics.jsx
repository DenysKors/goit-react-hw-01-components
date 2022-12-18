import PropTypes from 'prop-types';
import { StatsList } from 'components/Statistics/StatsList';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <StatsList
            label={stat.label}
            percentage={stat.percentage}
            key={stat.id}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
