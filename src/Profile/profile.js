import PropTypes from 'prop-types';

const Profile = (props) => {
    const {name, avatar, tag, location, stats: {followers, views, likes}} = props;
    return (
  <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={name}
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
    <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
    <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
    <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>
    );
};

Profile.defaultProps = {
    avatar:
      'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  };

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
  
export default Profile;