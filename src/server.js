require('dotenv').config();
const app = require('./api');
const loginController = require('./database/controller/loginController');
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController.login);

app.listen(port, () => console.log('ouvindo porta', port));
