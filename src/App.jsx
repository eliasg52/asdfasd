import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Add from './components/Add';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import './lib/font-awesome/css/all.min.css';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route element={<Watchlist />} path="/"></Route>
          <Route element={<Add />} path="/add"></Route>
          <Route element={<Watched />} path="/watched"></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
