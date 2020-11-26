import React, {useState} from 'react';

import  '../pages/styles/Lista.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const  App=()=>{
  const [data, setData] = useState([
    { id: 1, producto: "Camisa 1", talla: "S" },
    { id: 2, producto: "Camisa 2", talla: "M" },
    { id: 3, producto: "Camisa 3", talla: "L" },
    { id: 4, producto: "Camisa 4", talla: "XL" },
    { id: 5, producto: "Camisa 5", talla: "XXL" },
    { id: 6, producto: "Camisa 6", talla: "XS" },
  ])

  const [nameForm, setNameForm] = useState('Guardar')
  const [nameButton, setNameButton] = useState('Registrar')
  const [editing, setEditing] = useState(false)

  const [id, setId] = useState('')
  const [producto, setProducto] = useState('')
  const [talla, setTalla] = useState('')

  const handleId = (e) => {
    setId(e.target.value)
  }
  const handleProducto = (e) => {
    setProducto(e.target.value)
  }
  const handleTalla = (e) => {
    setTalla(e.target.value)
  }
  
  const editData = (id, producto, talla) => {
    setEditing(true)
    setNameForm('Editar')
    setNameButton('Editar')

    setId(id)
    setProducto(producto)
    setTalla(talla)
  }

  const changeData = (id, producto, talla) => {
    const newData = []

    data.forEach(elemento => {
      let newElement = null

      if(elemento.id === id) {
        newElement = {
          id: elemento.id,
          producto,
          talla,
        }
      }
      newElement ? newData.push(newElement) : newData.push(elemento)
    })

    setData(newData)
  }

  const saveData = () => {
    if(editing) {
      changeData(id, producto, talla)
    } else {

      setData([...data, {id, producto, talla}])
    }

    setId('')
    setProducto('')
    setTalla('')
    setEditing(false)
    setNameForm('Guardar')
    setNameButton('Registrar')
  }

  const deleteData = (id) => {
    const newArray = []

    data.forEach((element) => {
      if (element.id !== id) {
        newArray.push(element)
      }
    })

    setData(newArray)
  }
  

  return (
    <>
    
    <button type="button" className="btn-success openModal insertar" data-toggle="modal" data-target="#exampleModal" onClick={() => {setEditing(false)}} >Insertar Producto</button>

      <div className='container mt-5'>
        <div className='ml-auto col-12 col-lg-10'>
        <table class="table ">
          <thead>
            <tr>
              <th>id</th>
              <th>Producto</th>
              <th>Talla</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento) => (
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.producto}</td>
                <td>{elemento.talla}</td>               
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => { editData(elemento.id, elemento.producto, elemento.talla) }}>Editar</button>{" "}
                  <button style={{ margin: '2px 0px 0px' }}   type="button" class="btn btn-danger"  onClick={() => deleteData(elemento.id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{nameForm} Registro</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="Id-name" class="col-form-label">Id:</label>
                  <input value={id} onChange={handleId} type="text" class="form-control" id="id-name"></input>
                </div>
                <div class="form-group">
                  <label for="Producto-name" class="col-form-label">Producto:</label>
                  <input value={producto} onChange={handleProducto} type="text" class="form-control" id="producto-name"></input>
                </div>
                <div class="form-group">
                  <label for="Talla-name" class="col-form-label">Talla:</label>
                  <input  value={talla} onChange={handleTalla} type="text" class="form-control" id="talla-name"></input>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={saveData}>{nameButton}</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close">Cancelar </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
