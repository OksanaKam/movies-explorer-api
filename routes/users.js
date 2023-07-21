const routerUsers = require('express').Router();
const {
  getUserInfo,
  updateProfile,
} = require('../controllers/users');
const { userValidation } = require('../utils/validation');

routerUsers.get('/users/me', getUserInfo);
routerUsers.patch('/users/me', userValidation, updateProfile);

module.exports = routerUsers;
