import PropTypes from 'prop-types';
import defaultImage from 'images/defaultImage.jpg';
import styles from 'components/FriendListItem/FriendListItem.module.css';

export default function FriendListItem({
  avatar = defaultImage,
  name,
  isOnline,
}) {
  return (
    <li className={styles.item}>
      <span className={styles[isOnline]}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
