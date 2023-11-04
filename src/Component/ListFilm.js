import React, { useState } from 'react';
import filmsData from './Films';
import Chercher from './Chercher';
import FilmCard from './FilmCard';
import '../App.css';


function ListFilm() {
  const [films, setfilms] = useState(filmsData);
  const [chercher, setChercher] = useState('');
  const [newFilm, setNewFilm] = useState({ title: '', descreption: '', posterURL: '', rating: '' });

  const handleInputChange = (event) => {
    setNewFilm({ ...newFilm, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setfilms([...films, newFilm]);
    setNewFilm({ title: '', descreption: '', posterURL: '', rating: '' });
  };

  const cherchedFilms = films.filter(film => film.title.toLowerCase().includes(chercher.toLowerCase()));

  return (
    <div>
      <chercher onFilterChange={setChercher} />
      {cherchedFilms.map((film, index) => (
        <FilmCard key={index} film={film} />
      ))}
      <form className="add-film-form" onSubmit={handleFormSubmit}>
        <input name="title" value={newFilm.title} onChange={handleInputChange} placeholder="Title" />
        <input name="descreption" value={newFilm.descreption} onChange={handleInputChange} placeholder="Description" />
        <input name="posterURL" value={newFilm.posterURL} onChange={handleInputChange} placeholder="Poster URL" />
        <input name="rating" value={newFilm.rating} onChange={handleInputChange} placeholder="Rating" />
        <button type="submit">Add Film </button>
      </form>
    </div>
  );
};

export default ListFilm;
