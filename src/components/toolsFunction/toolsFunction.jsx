import  data from "../data/MOCK_DATA.json";


export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve(data);
    }, 500)
  })
} 


export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {

    const item = data.find((elemento) => elemento.id === id);

    if (item) {
        resolve(item)
    } else {
        reject({
            error: "No se encontro el Producto"
        })
    }

  })
}


