import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmDescreption from './Component/FilmDescreption';
import ListFilm from './Component/ListFilm'; 

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<ListFilm />} />
          <Route path="/FilmDescreption/:id" element={<FilmDescreption />} />
        </Routes>
    </Router>
    </div>
  );
}
export default App;