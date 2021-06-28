import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';
import s from 'components/FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
