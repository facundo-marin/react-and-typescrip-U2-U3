import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

function App() {
  return (
    <div className="App">
      {/* <GuestList />
      <UserSearch /> */}
      <EventComponent />
    </div>
  );
}

export default App;
