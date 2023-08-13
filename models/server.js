const  express=require('express');
const cors=require('cors');

class Server{
    constructor(){
        this.app=express();
       this.port=process.env.PORT || 8080;
       this.usuarioPath='/api/usuarios';
        
        //Middlewares
        this.middlewares();
        //rutas
        this.routes();
    }

    middlewares(){
        //Seguridad de node rutas de lista blancha y negra
        this.app.use(cors());

        //Direcotir public
        this.app.use(express.static('public'))
    }

    routes(){
     this.app.use(this.usuarioPath,require('../routes/usuarios'));
    }

    escuchar(){
        this.app.listen(this.port, ()=>{
            console.log('SErvidor corriendo en puerto ',this.port)
        });
    }
}

module.exports=Server;