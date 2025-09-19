import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { loggerMiddleware } from './middleware/logger';
import bookRoute from './routes/book';
import authorRoute from './routes/authors';
import { badInputHandler, conflictHanlder, notFoundHandler } from './middleware/error';

const app:Express = express();
const PORT = process.env.PORT || 3000; 

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.json());

app.use(loggerMiddleware);

app.use("/v1/books", bookRoute);
app.use("/v1/authors", authorRoute);

app.use(notFoundHandler);
app.use(badInputHandler);
app.use(conflictHanlder)

//Server start
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})
