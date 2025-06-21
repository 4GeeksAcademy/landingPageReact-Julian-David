import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

const jumbotron = () => {
    return (
        <div class="container py-4">
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
                    <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula et orci eu fringilla.
                        Etiam pretium, neque sed accumsan aliquam, enim nibh imperdiet dui, id t</p>
                        <button class="btn btn-primary btn-lg" type="button">Call To action!</button>
                </div>
            </div>
        </div>
    )
};


export default jumbotron;