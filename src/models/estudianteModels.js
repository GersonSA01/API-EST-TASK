import {Schema, model} from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2";
const estudSchema = new Schema(
    {
        nombre: { type: String, required: true },
        cedula: { 
          type: String, 
          required: true, 
          unique: true,
          validate: {
              validator: cedula => cedula.length === 10,
              message: "La cédula debe tener 10 dígitos"
          }
      },  
        nota1:{ type: String , required: true},
        nota2:{ type: String , required: true},
        
    },
    {
      versionKey: false,
      timestamps: true,
    }
);
estudSchema.plugin(mongoosePaginate)
export default model('Estudiante',estudSchema)