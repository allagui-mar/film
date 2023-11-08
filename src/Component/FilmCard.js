
import { useNavigate, useNavigation } from 'react-router-dom';
import React from 'react';
import FilmDescreption from './FilmDescreption';
import '../App.css';
function FilmCard({film}) {
  const navigate = useNavigate()

  return (
      <div className ="film-card" onClick={() => navigate(`/FilmDescreption/${film.id}`)}>
        <h2>{film.title}</h2>
        <p>{film.descreption}</p>
        <img src={film.posterURL} alt={film.title} style={{width:'500px'}}/>
        <p>{film.rating}</p>  
      </div>
  );
}
export default FilmCard;