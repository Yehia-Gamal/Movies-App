import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Moves from './components/Movies';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Moves />} />
        <Route path='/add' element={<Add />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/watched' element={<Watched />} />
      </Routes>
    </div>
  );
}

export default App;
