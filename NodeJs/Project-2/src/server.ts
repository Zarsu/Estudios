import express from 'express';
import authRouter from './routes/authRoutes.ts';
import userRouter from './routes/userRoutes.ts';
import habitsRouter from './routes/habitsRoutes.ts';
import cors from 'cors'; // Handle petitions from other origins. Useful for frontend-backend communication when they are on different domains or ports.
import morgan from 'morgan'; // Http logger middleware. Logs details of incoming requests and responses
import helmet from 'helmet'; // Security middleware. Sets various HTTP headers to help protect the app from common vulnerabilities.

const app = express();

app.use(helmet());
app.use(cors()); // Here should be our CORS configuration, usually with ENV variables.
app.use(express.json()); // Middleware to parse incoming JSON requests and make the data available in req.body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data (from HTML forms) and make it available in req.body
app.use(morgan('dev', {
  skip: (req, res) => process.env.NODE_ENV === 'test' // Skip logging in test environment
}));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/habits', habitsRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.post('/echo', (req, res)=>{
  res.status(200).json({ message: "I'm alive!" });
});

export { app } 

export default app
