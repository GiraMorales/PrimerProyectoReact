import { Link } from 'react-router-dom';
import './Juegos.css';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';

const Juegos = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 10;

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games'
    )
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  const totalPages = Math.ceil(games.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = games.slice(startIndex, startIndex + gamesPerPage);

  // Función para generar la paginación dinámica
  const getPagination = () => {
    let pages = [];

    if (totalPages <= 7) {
      // Mostrar todas si hay pocas páginas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 5) {
        // Primer bloque
        pages = [1, 2, 3, 4, 5, '...next', totalPages];
      } else if (currentPage >= totalPages - 4) {
        // Último bloque
        pages = [
          1,
          '...prev',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        ];
      } else {
        // Bloque intermedio
        pages = [
          1,
          '...prev',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...next',
          totalPages
        ];
      }
    }

    return pages;
  };

  const handleDotsClick = (type) => {
    if (type === '...next') {
      setCurrentPage((prev) => Math.min(prev + 5, totalPages));
    } else if (type === '...prev') {
      setCurrentPage((prev) => Math.max(prev - 5, 1));
    }
  };

  return (
    <main id='juegos'>
      <h2>Juegos</h2>
      <div className='juegos-grid'>
        {currentGames.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <h3>{game.title}</h3>
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.short_description}</p>
          </Link>
        ))}
      </div>

      {/* Paginación */}
      <div className='pagination'>
        {getPagination().map((page, index) =>
          typeof page === 'string' && page.includes('...') ? (
            <button
              key={index}
              className='dots'
              onClick={() => handleDotsClick(page)}
            >
              ...
            </button>
          ) : (
            <button
              key={page}
              className={page === currentPage ? 'active' : ''}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )
        )}
      </div>
    </main>
  );
};

export default Juegos;
