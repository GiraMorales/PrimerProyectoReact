import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Juego.css';

const Juego = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setJuego(res);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p id='cargando'>Cargando juego...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!juego) return <p>No se encontró el juego.</p>;

  return (
    <main id='juego'>
      <h2 className='tituloJuego'>{juego.title}</h2>
      <iframe
        src={juego.game_url}
        title={juego.title}
        width={'100%'}
        height={'600px'}
      >
        Tu navegador no soporta iframes
      </iframe>
      {/* Alternativa si el iframe no funciona */}
      <p className='boton-jugar'>
        Si no ves el juego, puedes abrirlo directamente aquí:{' '}
        <a href={juego.game_url} target='_blank' rel='noopener noreferrer'>
          Ir al juego
        </a>
      </p>
    </main>
  );
};

export default Juego;
