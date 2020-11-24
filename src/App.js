import Profile from "./components/profile/profile";
import user from './components/profile/user.json'
import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/statistics';


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
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div> 

  );
}

