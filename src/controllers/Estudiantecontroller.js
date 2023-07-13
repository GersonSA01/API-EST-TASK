import Estudiante from "../models/estudianteModels.js";
import { getPagination } from "../libs/getPaginations.js";

export const findAllEstud = async (req, res) => {
  try {
    const {size, page,nombre}=req.query
    const condition = nombre ? {
      nombre: {$regex: new RegExp(nombre), $options: "i"},
    } : {};
    const {limit, offset}= getPagination(page,size)
    const est = await Estudiante.paginate(condition,{offset,limit});
    res.json({
      totalItems: est.totalDocs,
      estudiante: est.docs,
      totalPages: est.totalPages,
      currentPage: est.page -1
    });
    
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo salió mal al presentar estudiante",
    });
  }
  
};


export const createEstud = async (req, res) => {
  const cedula = req.body.cedula;

  const validEstu = await Estudiante.findOne({ cedula });

  if (validEstu) {
    return res.status(400).json({ message: "La cédula ya esta registrada" });
  }
  try {
    const newEstud = new Estudiante({
      nombre: req.body.nombre,
      cedula: req.body.cedula,
      nota1: req.body.nota1,
      nota2: req.body.nota2,
    });
  
    const EstSaved = await newEstud.save();
  
    return res.json(EstSaved);
    
  } catch (error) {
    res.status(500).json({
      message: error.message || "Estudiante no creado :v",
    });
  }
  
};


export const findOneEstud = async (req, res) => {
  const cedula = req.params.cedula;

  try {
    const est = await Estudiante.findOne({ cedula });

    if (!est) {
      return res
        .status(404)
        .json({
          message:
            "Estudiante no encontrado",
        });
    }

    res.json(est);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar el estudiante" });
  }
};



export const deleteEstud = async (req, res) => {
  const cedula = req.params.cedula;

  try {
    const deletedEstud = await Estudiante.findOneAndDelete({ cedula });

    if (!deletedEstud) {
      return res.status(404).json({
        message:
          "No se encontro el estudiante",
      });
    }

    res.json({ message: "Estudiante borrado" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al borrar estudiante" });
  }
};



export const updateEstud = async (req, res) => {
  const cedula = req.params.cedula;

  try {
    const updatedEstud = await Estudiante.findOneAndUpdate(
      { cedula },
      req.body,
      { new: true }
    );

    if (!updatedEstud) {
      return res.status(404).json({
        message:
          "No se encontro el estudiante",
      });
    }

    res.json({ message: "Estudiante modificado", updatedEstud });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al editar estudiante" });
  }
};

export const deleteAllEstud = async (req, res) => {
  try {
    const deletedEstud = await Estudiante.deleteMany({});
    res.json({ message: "Lista de estudiantes borrada" });
  } catch (error) {
    res.status(500).json({ message: "Error al borrar la lista de estudiantes" });
  }
};