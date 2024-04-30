const app = require('./src/app');
const config = require('./src/configuration/config');

// start the server to listen on the specified port from the config file
app.listen(config.PORT, () => {
  // log a message to indicate that the server is running and on which port
  console.log(`Server running on port ${config.PORT}`);
});
