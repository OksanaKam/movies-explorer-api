const STATUS_OK = 200;
const STATUS_CREATED = 201;
const ERROR_CODE = 400;
const STATUS_NOT_FOUND = 404;
const STATUS_ERROR_SERVER = 500;
const REGEX_URL = /^https?:\/\/[www.]?[\w\-._~:/?#[\]@!$&'()*+,;=%]+\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+#?$/;
const REGEX_PASSWORD = /^[a-zA-z0-9]{8,}$/;
const URL_ERROR = 'Введен некорректный url';

module.exports = {
  STATUS_OK,
  STATUS_CREATED,
  ERROR_CODE,
  STATUS_NOT_FOUND,
  STATUS_ERROR_SERVER,
  REGEX_URL,
  REGEX_PASSWORD,
  URL_ERROR,
};
