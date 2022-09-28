import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
  req.tercherName = 'dell';
  next();
});

app.use(router);

app.listen(3000, () => {
  console.log('服务已启动：http://127.0.0.1:3000');
});
