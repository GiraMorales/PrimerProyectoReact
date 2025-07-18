import { Link } from 'react-router-dom';
import './Juegos.css';
import { useState, useEffect } from 'react';

const Juegos = () => {
  //www.freetogame.com/api/games
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
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

  if (loading)
    return (
      <div className='loading'>
        <img src='/assets/loading.gif' />
      </div>
    );

  return (
    <main id='juegos'>
      <h2>Juegos</h2>
      <div className='juegos-grid'>
        {games.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <h3>{game.title}</h3>
            <img
              key={game.id}
              src={game.thumbnail}
              alt={game.title}
              url={game.game_url}
            />
            <p>{game.short_description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Juegos;
