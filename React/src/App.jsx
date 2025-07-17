import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import Juego from './pages/Juego/Juego';
import Juegos from './pages/Juegos/Juegos';

function App() {
  return (
    <>
      <Header />
      <Background />
      <Routes>
        <Route path='/' element={<Juegos />} />
        <Route path='/game/:id' element={<Juego />} />
      </Routes>
    </>
  );
}

export default App;
