import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import ContextProvider from './components/context/GlobalContext';

function App() {
  return (
    <div className='main'>

      <ContextProvider>
        <Header />
        <Routes>
          <Route path='/Movies-App' element={<Add />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/watched' element={<Watched />} />
        </Routes>
      </ContextProvider>

    </div>
  );
}

export default App;
