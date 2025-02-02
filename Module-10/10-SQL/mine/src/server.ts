import express, { type Response, type Request} from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/movies', (_req: Request, res: Response) =>{
    pool.query(`SELECT * FROM movies`, (err: Error, result: QueryResult) => {
        if (err){
            console.log(err);
        } else if (result) {
            console.log(result.rows);
            return res.status(200).json(result.rows);
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});