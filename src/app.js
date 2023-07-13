//tiene la aplicacion de express
import express from "express";
//para ver las peticiones que llegan
import morgan from 'morgan'
//para que otro servidor pida datos aqui
import cors from 'cors'
//conexion con los routes
import TasksRoutes from "./routes/tasks.routes.js";

import EstuRoutes from './routes/estu.routes.js'


const app = express();
//settings
app.set("port", process.env.PORT || 3005);
//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
//routes
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la app" });
});

app.use("/api/task", TasksRoutes);
app.use('/api/estudiante',EstuRoutes)


export default app;                                                                                                                                                                                                                                                                                                                                                                                                                                                                              