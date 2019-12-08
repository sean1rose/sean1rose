const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send(`This is the express app on port ${port}. Locally available in sean1rose repo!`);
})

app.get('/fouroneeight', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

