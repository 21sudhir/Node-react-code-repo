const express = require('express');
const compression = require('compression');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const morgan = require('morgan');
const process_parameters = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 --port [num]')
  .describe('port', 'Port on which the API server will work, defaults to 3001')
  .help('h')
  .alias('h', 'help')
  .argv;

// Main routes
const routes = require("./server/routes");

const app = express();
const port = process_parameters.port || 3001;
const environment = process.env.NODE_ENV;

const is_development = environment === 'development';

/*
  If current environment is not development, serve static assets from build folder
  as React app's production bundle will be created in build folder, assets folder is
  also added to add support for serving any non react assets like large files etc.
*/
if(!is_development) {
  app.use(express.static('build'));
}
app.use(express.static('assets'));

// Add reqest logging middleware
app.use(morgan(is_development ? "tiny" : "combined"));

// Compress responses by default
app.use(compression());

// Add cookies parsing support
app.use(cookie_parser());

// Add support to parse JSON and urlencoded requests
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// Add default router don't add additional routes here
// To add more routes use the imported module file
app.use('/', routes);

// Start the application on the specified port
app.listen(port, () => {
  console.log(`Node server is running on http://localhost:${port}`)
});

// Handle uncaught exceptions to avoid server shoutdown
process.on("uncaughtException", function (err) {
  console.error(
    "\u001b[1m\u001b[31m%s\u001b[39m\u001b[22m",
    "Error: uncaughtException in node server",
    err.stack
  );
});