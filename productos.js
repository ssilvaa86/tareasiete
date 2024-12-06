const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];

  
 /* tarea 1 -> realizar el filter de productos con descuentos. En este se usa Filter
 Me debería listar televisor, sofá, leche */

 const productosConDescuento = products.filter(producto => producto.discount > 0);{

console.log(productosConDescuento);
 };

 /*Tarea 2 - CALcular el precio final con descuento , en ese se usa MAP.*/

  const productsWithFinalPrice = productosConDescuento.map(product => {
if (product.price < product.discount){
    product.priceAfterDiscountpriceAfterDiscount = product.price
}else{
     product.priceAfterDiscount=product.price-product.discount;
   
}
return product

  });
  
 console.log("Precios finales con descuento:", productsWithFinalPrice);


  /* TAREA 3 - identificar productos con stock menos de 5 unidades y meterlos en un array */

  const productosStockBajo = products.filter(producto => producto.stock < 5);
  console.log("Products con stock menos de 5 unidades... :",productosStockBajo);


  /*TAREA 4 - Actualizar el stock de un producto */

  const updatearStockProduct = (nombre, cantidad) => {
    try{
        const prod = products.find(prod => prod.nombre === nombre);
        if(prod){
            prod.stock += cantidad;
        }else{
            throw Error("No se pudo actualizar el stock del producto "+nombre+" porque no existe en nuestro inventario, intente nuevamente");
        }
    }catch(e){
        console.error(e);
    }
}

updatearStockProduct('Fotos', 500); //UN PRODUCTO QUE NO EXISTE
updatearStockProduct('Pan', 1000); //UN PRODUCTO QUE si EXISTE
console.log(products);

/* Tarea 5 - Resumen por categoría */

const granResumenCategoria = (products) => {
    const categorias = [];
    categorias.push({'categoría': 'electrónica', 'total': products.filter(prod => prod.category === 'electrónica').length})
    categorias.push({'categoría': 'hogar', 'total': products.filter(prod => prod.category === 'hogar').length})
    categorias.push({'categoría': 'alimentos', 'total': products.filter(prod => prod.category === 'alimentos').length})
    
    console.log("Resumen de productos por categorías existentes:", categorias);
}


    granResumenCategoria(products);