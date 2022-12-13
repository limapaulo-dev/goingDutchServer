const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);

