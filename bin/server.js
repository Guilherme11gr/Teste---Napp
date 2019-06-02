'use-strict'

import http from 'http';
import app from '../src/app';

const port = '8080';

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('listening', () => console.log(`Listen on port: ${server.address().port}`));