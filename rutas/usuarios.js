const { Router } = require('express');
const router = Router();

/// configuramos con router todas las rutas que queramos. ej: router.get('/')...

router.get("/usuarios", (req, res) => {

    const usuarios = [{ nombre: "DESDE EL GET!!" }, { sesion_nombre: req.session.nombre }]


    res.json(usuarios);

});

router.post("/usuarios", (req, res) => {

    const usuarios = [{ nombre: "DESDE EL POST!" }, { sesion_nombre: req.session.nombre }]
    res.json(usuarios);

});

router.put("/usuarios/:id", (req, res) => {

    const id = req.params.id;
    const nombre = req.body.nombre;

    const usuarios = [
        { nombre: "DESDE EL PUT con ID: " + id },
        { sesion_nombre: req.session.nombre }, 
        { desde_body_nombre: nombre }];

    res.json(usuarios);

});

router.patch("/usuarios", (req, res) => {

    const usuarios = [{ nombre: "DESDE EL PATCH" }, { sesion_nombre: req.session.nombre }]
    res.json(usuarios);

});

router.delete("/usuarios", (req, res) => {

    const usuarios = [{ nombre: "DESDE EL DELETE" }, { sesion_nombre: req.session.nombre }]
    res.json(usuarios);

});






module.exports = router;