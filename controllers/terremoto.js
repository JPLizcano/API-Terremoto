const { response } = require("express");

const Terremoto = require("../models/terremoto");

const terremotoGet = async (req, res = response) => {
  const terremotos = await Terremoto.find();

  res.json({
    terremotos,
  });
};

const terremotoPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Terremoto creado.";

  try {
    const terremoto = new Terremoto(body);
    await terremoto.save();
  } catch (error) {
    mensaje = "Problemas al crear el terremoto.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const terremotoPut = async (req, res) => {
  const { _id, fecha, magnitud, ubicacion } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await Terremoto.findOneAndUpdate({ _id: _id }, { fecha: fecha, magnitud: magnitud, ubicacion: ubicacion });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const terremotoDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await Terremoto.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { terremotoGet, terremotoPost, terremotoPut, terremotoDelete };


//terremotos: fecha, magnitud, ubicacion