
class Products{
    constructor() {
        this.products = [
            {"title":"Regla",
            "price":"140",
            "thumbnail":"",
            "id":1},
            {"title":"Cartuchera"
            ,"price":"390",
            "thumbnail":"",
            "id":2},
            {"title":"Lapicera",
            "price":"85",
            "thumbnail":""
            ,"id":3}
        ];
        this.nextId=4;
    }

    getAllProducts(){
        return this.products;
    }

    getProductById(id){
        const productFound = this.products.filter( product => product.id === parseInt(id) );
        return productFound.length > 0 ? productFound : { error : 'producto no encontrado' };
    }

    addProduct(product){
        product["id"]=this.nextId;
        this.nextId++;
        this.products.push(product);
        return product;
    }

    updateProduct(id, newProduct){
        this.products.map(product => {
            if ( product.id === parseInt(id) ){
                //creo un array con los Keys del producto enviado:
                const keys = Object.keys(newProduct)
                //actualizo solo los Keys enviados:
                keys.forEach(key => {
                    product[key]=newProduct[key];
                });
            }
        })
    }
    
    deteleProduct(id){
        this.products = this.products.filter( product => product.id !== parseInt(id) );
        return { message : `El Id:${id} ha sido eliminado` };
    }

}

export const products = new Products;