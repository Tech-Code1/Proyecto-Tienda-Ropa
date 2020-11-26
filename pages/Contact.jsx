import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-background">
        <div className="contact-container">
          <form>
            <p className="contact-title">Contáctanos</p>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Nombre</label>
                <input
                  type="text"
                  className="form-control shadow rounded"
                  id="campos"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Correo</label>
                <input
                  type="email"
                  className="form-control shadow rounded"
                  id="campos"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Comentario</label>
              <textarea
                className="form-control shadow rounded"
                id="campos"
                rows="3"
                required
              />
            </div>
            <button type="submit" className="btn btn-block" id="boton">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
