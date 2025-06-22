import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

const jumbotron = () => {
    return (
        <div className="container py-4 ">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3 shadow-sm border-0">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold ">¡Bienvenido en el Nombre de Jesús!</h1>
                    <p className="text-center mt-4 fs-4">"Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí" - Juan 14:6</p>
                        <button className="btn btn-dark btn-lg mt-5" type="button"><i className="fas fa-book-bible me-2"></i>Conocer a Cristo</button>
                </div>
            </div>
        </div>
    )
};


export default jumbotron;