
import { useParams, useNavigate } from 'react-router-dom'; 
import ReactPlayer from 'react-player'; 
import films from './Films';

function FilmDescreption() {
  const { id } = useParams();
  const navigate = useNavigate();
  const film = films.find(film => film.id === id);

  return (
    <div>
       <h3>{film.descreption}</h3>
      <h2>{film.title}</h2>
      <ReactPlayer url={film.trailerLink} />
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
}
export default FilmDescreption;
