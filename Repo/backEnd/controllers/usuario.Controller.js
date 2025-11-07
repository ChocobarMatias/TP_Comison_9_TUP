const {connection} = require('../config/db');

const mostrarUsuarios = (req,res)=>{

    const query = "select * from usuarios";

    connection.query(query, (err, results) => {

        if (err) {
            console.error("Error al obtener usuarios:", err);
            return res.status(500).json({ error: "Error al obtener usuarios" });
        }

        if(results.length === 0){
            return  res.status(404).json({message: "No se encontraron usuarios"});
        }
        res.json(results);
    });
};
   
const  UsuarioXId = (req,res)=>{
    const id = req.params.id;

    const query = "select * from usuarios where id = ?";

    connection.query(query, [id],(err,results) => {

        if (err) {
            console.error("Error al obtener usuario por ID:", err);
            return res.status(500).json({ error: "Error al obtener usuario por ID" });
        }
        res.json(results);
    });
};

const crearUsuario = (req,res)=>{
    const {nombre,apellido,email,password} = req.body;//conecto con el front 

    const query = "insert into usuarios (nombre, apellido, email, password) values (?,?,?,?)";
    connection.query(query, [nombre, apellido, email, password], (err, results) => {
        if (err) {
            console.error("Error al crear usuario:", err);
            return res.status(500).json({ error: "Error al crear usuario" });
        }
        res.status(201).json({ message: "Usuario creado exitosamente", userId: results.insertId });
    });
};

const actualizarUsuario = (req,res)=>{
    const id = req.params.id;
    const {nombre,apellido,email,password} = req.body;

    const query = "update usuarios set nombre = ?, apellido = ?, email = ?, password = ? where id = ?";
    connection.query(query, [nombre, apellido, email, password, id], (err, results) => {
        if (err) {
            console.error("Error al actualizar usuario:", err);
            return res.status(500).json({ error: "Error al actualizar usuario" });
        }


        res.json({ message: "Usuario actualizado exitosamente" });
    });
};

const eliminarUsuario = (req,res)=>{
    const id = req.params.id;

    const query = "delete from usuarios where id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error al eliminar usuario:", err);
            return res.status(500).json({ error: "Error al eliminar usuario" });
        }
        res.json({ message: "Usuario eliminado exitosamente" });
    });
};


module.exports = {mostrarUsuarios, UsuarioXId, crearUsuario, actualizarUsuario, eliminarUsuario}
