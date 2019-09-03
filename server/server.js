// CONFIGURACIONES GLOBALES
require ('./config/config');


// LLAMAR MODULO DE EXPRESS
const express = require ('express');
// INICIALIZAR EL MODULO DE EXPRESS 
const app = express();





// USO DEL MODULO PARA CAPTURAR LOS DATOS DEL BODY DEL POSTMAN 
const bodyParser =  require ('body-parser');
// USO DE UN MIDDLEWARE PARA CAPTURAR LOS DATOS DEL BODY
app.use(bodyParser.urlencoded({extended:false}));
// FORMATEAR EN UN JSON LO DEL BODY PARSER
app.use(bodyParser.json());



// CREAR UN APRIMERA RUTA DE INICIO
app.get('/',(req,res)=>
{
        res.json(
            {
                nombre:"Byron"
            })
});


// METODO GET
app.get('/usuarios',(req,res)=>
{
        res.json(
            {
                nombre:"Byron"
            })
});


// METODO POST
app.post('/usuarios',(req,res)=>
{
        // USO DEL BODY-PARSER
        // PARA CAPTURAR LOS DATOS DEL BODY DE POSTMANN
        let body = req.body;
        res.json({
            persona:body
        });
});


// METODO PUT
app.put('/usuarios/:id',(req,res)=>
{
        // OBTENER EL ID DE LA URL
       let idu= req.params.id
       // ENVIAR EL ID CAPTURADO A TRAVES DE UN JSON
        res.json(
            {
                id:idu,
            });
});



// METODO DELETE
app.delete('/usuarios',(req,res)=>
{
        res.json("DELETE USUARIOS");
});



// ESTABLECER EL PUERTO DE EXPRESS
app.listen(process.env.PORT,()=>{
    console.log(`SERVIDOR INICIALIZADO EN EL PUERTO ${process.env.PORT}`);
});
