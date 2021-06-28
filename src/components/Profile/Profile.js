import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultProfileImage from 'images/defaultImage.jpg';

export default function Profile(props) {
  const { name, tag, location, avatar = defaultProfileImage, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsListItem}>
          <span className={s.label}>Followers</span>
          <br></br>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsListItem}>
          <span className={s.label}>Views</span>
          <br></br>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsListItem}>
          <span className={s.label}>Likes</span>
          <br></br>
          <span className={s.quantity}>{stats.likes}</span>
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
