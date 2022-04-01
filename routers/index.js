import {Router} from "express";
import {products} from "../controllers/index.js";

export const mainRoute = Router();

//GET '/api/productos' -> devuelve todos los productos.
mainRoute.get('/',(req,res)=>{
    //si existe un id enviado por formulario:
    if(req.query.id){
        res.json( products.getProductById(req.query.id) );
    }else{
        res.json( products.getAllProducts() );
    }
})

//GET '/api/productos/:id' -> devuelve un producto según su id.
mainRoute.get('/:id', (req,res)=>{
   const id = req.params.id;
   res.json( products.getProductById(id) );
})

//POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
mainRoute.post('/',(req,res)=>{
    const product = req.body;
    res.json( products.addProduct(product) );
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
mainRoute.put('/:id', (req,res)=>{
    const id = req.params.id;
    const product = req.body;
    res.json( products.updateProduct(id, product) );
})

//DELETE '/api/productos/:id' -> elimina un producto según su id.
mainRoute.delete('/:id', (req,res)=>{
    const id = req.params.id;
    res.json( products.deteleProduct(id) );
})