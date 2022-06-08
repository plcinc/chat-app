import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';

const web = express();
const webPort = process.env.WEB_PORT || 5000;

web.use(express.static('build'));
web.use(cors());
web.listen(webPort, () => console.log(`listening on :${webPort}`));

web.get('/healthz', (req: Request, res: Response) => {
  res.send('OK')
});

/** Catch all for serving the front-end build */
web.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
