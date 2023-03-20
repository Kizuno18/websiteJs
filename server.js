import http from 'http';
import fs from 'fs';
import { parse } from 'querystring';

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const { username, password } = parse(body);
      if (username === 'admin' && password === 'admin') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('Login bem-sucedido!\n');
      } else {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('Usuário ou senha incorretos.\n');
      }
    });
  } else {
    // Se não for uma solicitação POST para /login, envie a página de login
    const indexHtml = fs.readFileSync('index.html', 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(indexHtml);
  }
});

server.listen(8080, () => {
  console.log('Servidor em execução em http://localhost:8080/');
});
