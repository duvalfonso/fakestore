const productos = [
  {
    id: "1",
    description: "Juego de Comedor 6 Puestos Roma",
    category: "comedor",
    price: 899,
    img: "https://falabella.scene7.com/is/image/Falabella/6459012_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "2",
    description: "Juego de Comedor Roma 8 Sillas",
    category: "comedor",
    price: 1049,
    img: "https://falabella.scene7.com/is/image/Falabella/6829970_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "3",
    description: "Juego de Comedor 4 Puestos Mara",
    category: "comedor",
    price: 849,
    img: "https://falabella.scene7.com/is/image/Falabella/15589862_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "4",
    description: "Cama Europea 2 Plazas + Respaldo",
    category: "dormitorio",
    price: 849,
    img: "https://falabella.scene7.com/is/image/Falabella/7350188_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "5",
    description: "Cama Nido Divan Ergo T 1,5 Plazas",
    category: "dormitorio",
    price: 499,
    img: "https://falabella.scene7.com/is/image/Falabella/16387954_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "6",
    description: "Cama Tempo Rosen 2 Plazas",
    category: "dormitorio",
    price: 799,
    img: "https://falabella.scene7.com/is/image/Falabella/6329853_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "7",
    description: "Cama Ergo T Rosen 2 Plazas Ferrara",
    category: "dormitorio",
    price: 899,
    img: "https://falabella.scene7.com/is/image/Falabella/16387934_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "8",
    description: "Cama Europea Terra Cobre 2 Plazas + Muebles Lorraine",
    category: "dormitorio",
    price: 999,
    img: "https://falabella.scene7.com/is/image/Falabella/7001702_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "9",
    description: "Cama Europea Ortopedic 1.5 Plazas Respaldo Dub",
    category: "dormitorio",
    price: 499,
    img: "https://falabella.scene7.com/is/image/Falabella/15526297_1?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "10",
    description: "Kit Mueble de Cocina 6 puertas Golden",
    category: "cocina",
    price: 109,
    img: "https://sodimac.scene7.com/is/image/SodimacCL/5663881_01?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "11",
    description: "Kit mueble cocina new quartz nogal white 220x201x36 cm",
    category: "cocina",
    price: 169,
    img: "https://sodimac.scene7.com/is/image/SodimacCL/5315069_01?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "12",
    description: "Kit mueble cocina 121x174x36 cm Blanco",
    category: "cocina",
    price: 189,
    img: "https://sodimac.scene7.com/is/image/SodimacCL/2645440_02?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "13",
    description: "Mueble Despensa Génova 2 puertas 61x160.6x31.8",
    category: "cocina",
    price: 114,
    img: "https://sodimac.scene7.com/is/image/SodimacCL/5390427_01?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "14",
    description: "Mueble base 2 puertas cubierta",
    category: "cocina",
    price: 99,
    img: "https://sodimac.scene7.com/is/image/SodimacCL/8703779_00?wid=1500&hei=1500&qlt=70"
  },
  {
    id: "15",
    description: "Isla Cocina Aspen Blanca Denver",
    category: "cocina",
    price: 109,
    img: "https://sodimac.scene7.com/is/image/SodimacCL/8719403_01?wid=1500&hei=1500&qlt=70"
  }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout( () => {
      resolve(productos);
    }, 2000);
  });
};


export const getDetalleProducto = (id) => {
  return new Promise(resolve => {
    setTimeout( () => {
      const producto = productos.find(prod => prod.id === id);
      resolve(producto);
    }, 2000)
  })
}

export const getProductosPorCategoria = (idCategory) => {
  return new Promise(resolve => {
    setTimeout( ()=> {
      const productosCategoria = productos.filter(prod => prod.category === idCategory);
      resolve(productosCategoria);
    }, 500)
  })
}