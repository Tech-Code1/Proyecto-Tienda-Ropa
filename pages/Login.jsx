import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import LoginAPI from "./../components/LoginAPI";
import "./styles/Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="login-background">
        <div className="login-container">
          <h2 className="login-title">Iniciar sesión</h2>
          <hr />
          <form>
            <div className="form-group row">
              <label className="col-2 col-xs-2 col-sm-2 col-md-2">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </label>
              <div className="col-10 col-xs-10 col-sm-10 col-md-10">
                <input
                  type="email"
                  className="form-control shadow"
                  id="input"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-xs-2 col-sm-2 col-md-2">
                <FontAwesomeIcon icon={faUnlockAlt} size="2x" />
              </label>
              <div className="col-10 col-xs-10 col-sm-10 col-md-10">
                <input
                  type="password"
                  className="form-control shadow"
                  id="input"
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div id="button-cont" className="col-sm-12">
                <button type="submit" className="btn px-4" id="button-log">
                  Login
                </button>
              </div>
              <LoginAPI />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
