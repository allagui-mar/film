import React from 'react';
import '../App.css';


function FilmCard({film}) {
  return (
    <div className ="film-card">
        <h2>{film.title}</h2>
        <p>{film.descreption}</p>
        <img src={film.posterURL} alt={film.title} style={{width:'500px'}}/>
         <p>{film.rating}</p>      
    </div>
  );
}

export default FilmCard;
