const routerMovies = require('express').Router();
const {
  getAllMovies,
  deleteMovieId,
  createMovie,
} = require('../controllers/movies');
const { movieValidation, movieIdValidation } = require('../utils/validation');

routerMovies.get('/movies', getAllMovies);
routerMovies.delete('/movies/:movieId', movieIdValidation, deleteMovieId);
routerMovies.post('/movies', movieValidation, createMovie);

module.exports = routerMovies;
