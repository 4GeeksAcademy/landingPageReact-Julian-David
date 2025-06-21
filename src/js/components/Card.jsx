import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const Card = () => {
    const cardsData = [
        { title: "Card title 1", text: "Text for card 1" },
        { title: "Card title 2", text: "Text for card 2" },
        { title: "Card title 3", text: "Text for card 3" },
        { title: "Card title 3", text: "Text for card 4" }
    ];

    return (
        <> <div className="container py-5 d-flex flex-row justify-content-between">
            {cardsData.map((card, index) => (
                <div key={index} className="card " style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Card;