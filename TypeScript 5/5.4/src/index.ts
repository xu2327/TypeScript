import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['tercher dell'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(router);

app.listen(3000, () => {
  console.log('服务已启动：http://127.0.0.1:3000');
});
