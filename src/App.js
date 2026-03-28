import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';
import Item from './components/Item';
import NotFount from './components/NotFount';
import Search from './components/Search';

// Componente para rotas de busca (nome com letra maiúscula)
function SearchWrapper() {
  const { searchInput } = useParams();
  return <Search searchTerm={searchInput} />
}

// Componente para o header (nome com letra maiúscula)
function HeaderWrapper() {
  const navigate = useNavigate();

  function handleSubmit(e, searchInput) {
    e.preventDefault(); // Impede o recarregamento da pagina
    e.currentTarget.reset(); // Limpa o input
    navigate(`/search/${searchInput}`); // Empurra o usuario para nova rota
  }

  return <Header handleSubmit={handleSubmit} />
}

function App() {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <div>
          <HeaderWrapper />

          <Routes>
            {/* Rota Inicial */}
            <Route path="/" element={<Navigate to="/island" replace />} />

            {/* Rotas para as categorias fixas */}
            <Route path="/island" element={<Item searchTerm="Island" />} />
            <Route path="/archtecture" element={<Item searchTerm="Archtecture" />} />
            <Route path="/coding" element={<Item searchTerm="Coding" />} />
            <Route path="/coffee" element={<Item searchTerm="Coffee" />} />

            {/* Rota Dinamica */}
            <Route path="/search/:searchInput" element={<SearchWrapper />} />

            {/* NotFount */}
            <Route path="*" element={<NotFount />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;