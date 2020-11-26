import React, {useState} from "react";
import "./styles/Description.css";

const colores = ["BLANCO", "NEGRO", "ROJO", "AMARILLO", "AZUL"];
const genero = ["Femenino", "Masculino"];
const tallas = ["XS", "S", "M", "L", "XL"];
const tproduct = [
  "Camisa",
  "Pantalon",
  "Chaqueta",
  "Falda",
  "Vestido",
  "Blazer",
  "Buso",
];

const Description = () => {
  const [list, setList] = useState([]);
  const [producto, setProducto] = useState({
    tproducto: "",
    genero: "",
    talla: "",
    cantidad: "",
    color: "",
    precio: "",
  });
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, producto]);
    document.getElementById("miForm").reset();
  };
  return (
    <React.Fragment>
      <div className="description-background">
        <div className="description-container">
          <form id="miForm" onSubmit={handleSubmit}>
            <h2>Descripción producto</h2>

            <div className="row">
              <div className="col-6 col-sm-12 col-md-2">
                <label>Tipo producto</label>
                <select
                  className="form-control shadow"
                  name="tproducto"
                  onChange={handleChange}
                  required
                >
                  <option selected>{""}</option>
                  {tproduct.map((pr) => (
                    <option key={pr}>{pr}</option>
                  ))}
                </select>
              </div>
              <div className="col-6 col-sm-12 col-md-2">
                <label>Género</label>
                <select
                  className="form-control shadow"
                  name="genero"
                  onChange={handleChange}
                >
                  <option selected>{""}</option>
                  {genero.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="col-6 col-sm-12 col-md-2">
                <label>Tallas</label>
                <select
                  className="form-control shadow"
                  name="talla"
                  onChange={handleChange}
                >
                  <option selected>{""}</option>
                  {tallas.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="col-6 col-sm-12 col-md-2">
                <label>Cantidad</label>
                <input
                  type="number"
                  min="0"
                  name="cantidad"
                  className="form-control shadow"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 col-sm-12 col-md-2">
                <label>Colores</label>
                <select
                  className="form-control shadow"
                  name="color"
                  onChange={handleChange}
                >
                  <option selected>{""}</option>
                  {colores.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="col-6 col-sm-12 col-md-2">
                <label>Precio unitario</label>
                <input
                  type="number"
                  min="0"
                  className="form-control shadow"
                  name="precio"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col" id="button-cont">
                <button type="submit" className="btn btn-primary px-4">
                  Aceptar
                </button>
              </div>
            </div>
            <div className="container">
              <DescriptionList changeList={list} />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
