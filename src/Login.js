import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      {/* SPotify logo */}
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="spotify-logo"
      />
      {/* Login with Spotify */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
