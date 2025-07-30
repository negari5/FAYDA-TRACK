const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// Import Fayda OIDC routes (ONLY ONCE!)
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('FAYDA-HEALTHTRACK backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
