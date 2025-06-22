import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"



const Footer = () =>{
    return(
    <div className="">
        <footer className="text-center text-sm-start" style={{backgroundColor: "#000000"}}>
            <div className="container d-flex justify-content-center py-5">
                <button type="button" className="btn btn-primary btn-sm btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                    <i className="fas fa-heart fa-2x text-danger"></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                    <i className="fas fa-dove fa-2x "></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i class="fa-solid fa-book-bible fa-2x"></i>                
                </button>
                <button type="button" className="btn btn-primary btn-sm btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                    <i className="fas fa-water fa-2x text-primary"></i>
                </button>
            </div>            
            <div className="text-center text-white p-3" style={{backgroundColor: "#000000"}}>
                © 2025 Copyright: {" "}
                <a className="text-white" href="#">CristoYJulián.com</a>
            </div>            
        </footer>  
    </div>
    )
};

export default Footer;