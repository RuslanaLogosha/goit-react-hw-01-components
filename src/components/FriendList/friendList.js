import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import s from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
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
