// backend/config/fayda.js
require('dotenv').config();

const config = {
  client_id: process.env.CLIENT_ID,
  private_key: process.env.PRIVATE_KEY,
  redirect_uri: process.env.REDIRECT_URI,
  token_endpoint: process.env.TOKEN_ENDPOINT,
  auth_endpoint: process.env.AUTHORIZATION_ENDPOINT,
  userinfo_endpoint: process.env.USERINFO_ENDPOINT
};

module.exports = config;
