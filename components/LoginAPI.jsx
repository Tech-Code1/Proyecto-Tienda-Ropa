import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const responseFacebook = (response) => {
  console.log(response);
};

const responseGoogle = (response) => {
  console.log(response);
};

const LoginAPI = () => {
  return (
    <React.Fragment>
      <div id="button-cont" className="col-sm-12">
        <FacebookLogin
          appId="212143223640435"
          fields="name,email,picture"
          icon="fa-facebook"
          cssClass="my-facebook-button-class"
          callback={responseFacebook}
        />
      </div>
      <div id="button-cont" className="col-sm-12">
        <GoogleLogin
          clientId="464134095923-8niqo5lfl5jcmv5r5jamjgukav5k0na8.apps.googleusercontent.com"
          buttonText="Login with Gmail"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </React.Fragment>
  );
};

export default LoginAPI;
