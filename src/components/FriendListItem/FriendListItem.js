import PropTypes from 'prop-types';
import defaultImage from 'images/defaultImage.jpg';
import s from 'components/FriendListItem/FriendListItem.module.css';

export default function FriendListItem({
  avatar = defaultImage,
  name,
  isOnline,
}) {
  return (
    <li className={s.item}>
      <span className={s[isOnline]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
