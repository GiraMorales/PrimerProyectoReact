import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Juego.css';
import Loading from '../../components/Loading/Loading';

const Juego = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${id}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo obtener el juego');
        }
        return res.json();
      })
      .then((res) => {
        setJuego(res);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error al cargar el juego. Intenta de nuevo más tarde.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!juego) return <p>No se encontró el juego.</p>;

  return (
    <main id='juego'>
      <h2 className='tituloJuego'>{juego.title}</h2>
      <iframe src={juego.game_url} title={juego.title}>
        Tu navegador no soporta iframes
      </iframe>
      {/* Alternativa si el iframe no funciona */}
      <p className='boton-jugar'>
        Si no ves el juego, puedes abrirlo directamente aquí:{' '}
        <a href={juego.game_url} target='_blank' rel='noopener noreferrer'>
          Ir al juego
        </a>
      </p>
      <Link to='/'>
        <button className='boton-volver'>Volver</button>
      </Link>
    </main>
  );
};

export default Juego;
