import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
