    // Lista de productos
    const productos = [
        { nombre: "rack", categoria: "hogar", precio: 100000, cantidad: 16, descuento: 10 },
        { nombre: "audifonos", categoria: "electronica", precio: 150000, cantidad: 13, descuento: 10 },
        { nombre: "palta", categoria: "alimentos", precio: 8000, cantidad: 15, descuento: 10 },
    ];
    
    // Función para calcular el descuento
    function calcularDescuento(precio, descuento) {
        return precio - (precio * (descuento / 100));
    }
    
    // Productos con descuento
    const productosEnDescuento = productos
        .filter(producto => producto.descuento > 0)
        .map(producto => ({
        ...producto,
        precioFinal: calcularDescuento(producto.precio, producto.descuento),
        }));
    
    console.log('Productos en descuento:', productosEnDescuento);
    
    // Filtrar productos con bajo stock
    const productosConBajoStock = productos.filter(producto => producto.cantidad < 5);
    if (productosConBajoStock.length > 0) {
        console.log('Unidades con bajo stock:', productosConBajoStock);
    } else {
        console.log('Pocas unidades disponibles.');
    }
    
    // Stock por categoría
    try {
        const stockPorCategoria = productos.reduce((categorias, producto) => {
        categorias[producto.categoria] = (categorias[producto.categoria] || 0) + producto.cantidad;
        return categorias;
        }, {});
    
        console.log('Stock disponible por categoría:', stockPorCategoria);
    } catch (error) {
        console.log('Error al calcular el stock por categoría:', error);
    }
    
    // Resumen por categorías
    const resumenPorCategorias = productos.reduce((resumen, producto) => {
        resumen[producto.categoria] = (resumen[producto.categoria] || 0) + 1;
        return resumen;
    }, {});
    
    console.log('Resumen por categorías:', resumenPorCategorias);