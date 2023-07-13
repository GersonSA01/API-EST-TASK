
import { config } from "dotenv";

config();
//si pasa una base de datos de produccion se va a ocultar para no verse el valor 
export const mongodbURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/tasksdb";

