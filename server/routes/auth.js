const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/login', (req, res) => {
  const url = `${process.env.AUTHORIZATION_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&scope=openid`;
  res.redirect(url);
});

router.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post(process.env.TOKEN_ENDPOINT, {
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI,
      client_id: process.env.CLIENT_ID,
      client_assertion_type: process.env.CLIENT_ASSERTION_TYPE,
      client_assertion: createClientAssertion()
    });

    const accessToken = response.data.access_token;
    const userInfo = await axios.get(process.env.USERINFO_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    res.json(userInfo.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Authentication failed.");
  }
});

function createClientAssertion() {
  const payload = {
    iss: process.env.CLIENT_ID,
    sub: process.env.CLIENT_ID,
    aud: process.env.TOKEN_ENDPOINT,
    exp: Math.floor(Date.now() / 1000) + parseInt(process.env.EXPIRATION_TIME),
    jti: Math.random().toString(36).substring(2)
  };

  return jwt.sign(payload, process.env.PRIVATE_KEY, {
    algorithm: process.env.ALGORITHM,
    keyid: "key-id-placeholder"
  });
}

module.exports = router;
