import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3010;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is successfully running');
});

app.use( express.json() )

app.get('/tshirt', (req: Request, res: Response) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'large'
  })
});

app.post('/tshirt/:id', (req: Request, res: Response) => {
  
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a Logo!'})
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  })
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});