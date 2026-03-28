import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';
import Item from './components/Item';
import NotFount from './components/NotFount';


function App() {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <div>
          <Header />

          <Routes>
            {/* Rota Inicial */}
            <Route path="/" element={<Navigate to="/island" replace/>} />

            {/* Rotas para as categorias fixas */}
            <Route path="/island" element={<Item searchTerm="Island" />} />
            <Route path="/Archtecture" element={<Item searchTerm="Archtecture" />} />
            <Route path="/coding" element={<Item searchTerm="Coding" />} />
            <Route path="/coffee" element={<Item searchTerm="Coffee" />} />

            {/* Rota Dinamica */}
            

            {/* NotFount */}
            <Route path="*" element={<NotFount />} />

            
          </Routes>
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;
