
const usuariosGet=(req, res) => {
    //const {params} = req.query; // para traer las variabls que se colocan en la ruta
    const {nombre='no colocado',page=1,limit=1} = req.query;// emplo ?nombre=jose&limit=10
    
    res.json({
        "msg":"get API en el controlador",
        nombre,
        page , 
        limit
    });
}

const usuariosPut=(req, res) => {
    const {id} = req.params;
    res.json({
        "msg":"Put API en el controlador",
        "id":id
    });
}

const usuariosPost=(req, res) => {
    res.json({
        "msg":"Post API en el controlador"
    });
}

const usuariosDelete =(req, res) => {
    res.json({
        "msg":"Delete API en el controlador"
    });
}


const usuariosPatch =(req, res) => {
    res.json({
        "msg":"Patch API en el controlador"
    });
}

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}