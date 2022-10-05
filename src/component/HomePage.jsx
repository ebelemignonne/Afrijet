import React from "react";
import logo_final from "../images/logo_final.jpeg";
import "./style.css";
import { Link } from "react-router-dom";
import Vol from "./vol";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="logo">
        <img src={logo_final} alt="" />
      </div>
      <h1>Réserver un vol?:</h1>
      <h2>cliquez sur le bouton en dessous</h2>

      <div className="d-grid gap-2 col-3 mx-auto">
        <button className="btn btn-danger" type="button">
          <Link to="/vol" className="link">
            Suivant
          </Link>
        </button>
      </div>
    </div>
  );
}
