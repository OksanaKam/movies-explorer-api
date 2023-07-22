const router = require('express').Router();
const routerUsers = require('./users');
const routerMovies = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-err');
const { signupValidation, signinValidation } = require('../utils/validation');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);

router.use(auth, routerUsers);
router.use(auth, routerMovies);

router.use(auth, (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = router;
