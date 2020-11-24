import Profile from "./Profile/profile";
import user from './Profile/user.json'


export default function App() {
  return (
    <div>
      <Profile 
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    </div>
  );
}

