import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function App() {

  return (
    <div className="App ">
        <img src="/assets/avatar.png" alt="logo" className='logo' />
        <h1>LA SANG LIVE</h1>



        <h3> <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{ color: 'gray', fontSize: '25px' }} /> Brisbane</h3>

        <a href="https://www.instagram.com/la.sangiorgio.live/" target='_'>Instagram</a>

    </div>
  );
}

export default App;
