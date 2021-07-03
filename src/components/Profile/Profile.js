import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultProfileImage from 'images/defaultImage.jpg';

export default function Profile(props) {
  const { name, tag, location, avatar = defaultProfileImage, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsListItem}>
          <span className={styles.label}>Followers</span>
          <br></br>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsListItem}>
          <span className={styles.label}>Views</span>
          <br></br>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.statsListItem}>
          <span className={styles.label}>Likes</span>
          <br></br>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
