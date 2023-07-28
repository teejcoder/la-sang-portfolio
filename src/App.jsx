import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


library.add(fas);

function App() {

  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>

  );
}

export default App;
