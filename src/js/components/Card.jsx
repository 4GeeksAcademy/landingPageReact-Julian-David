import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Para íconos

const Card = () => {
    const cardsData = [
        {
            title: "Jesús el Salvador",
            text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...",
            image: "https://source.unsplash.com/random/500x325/?jesus,christ",
            link: "#",
            verse: "Juan 3:16"
        },
        {
            title: "El Buen Pastor",
            text: "Yo soy el buen pastor; el buen pastor su vida da por las ovejas.",
            image: "https://images.unsplash.com/photo-1544830297-423c4b7a7a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            link: "#",
            verse: "Juan 10:11"
        },
        {
            title: "Camino y Verdad",
            text: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.",
            image: "https://images.unsplash.com/photo-1544830297-423c4b7a7a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            link: "#",
            verse: "Juan 14:6"
        },
        {
            title: "Pan de Vida",
            text: "Yo soy el pan de vida; el que a mí viene nunca tendrá hambre.",
            image: "https://images.unsplash.com/photo-1544830297-423c4b7a7a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            link: "#",
            verse: "Juan 6:35"
        }
    ];

    return (
        <div className="container-lg py-5">
            <h2 className="text-center mb-5">Las 7 Declaraciones de Jesús</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {cardsData.map((card, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="position-relative">
                                <img
                                    src={card.image}
                                    className="card-img-top img-fluid"
                                    alt={card.title}
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <div className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 small">
                                    <i className="fas fa-cross me-1"></i> {card.verse}
                                </div>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary">{card.title}</h5>
                                <p className="card-text flex-grow-1">{card.text}</p>
                                <div className="d-grid">
                                    <a href={card.link} className="btn btn-primary">
                                        <i className="fas fa-book-bible me-2"></i> Leer más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <a href="#" className="btn btn-outline-primary px-4">
                    <i className="fas fa-church me-2"></i> Ver todas las enseñanzas
                </a>
            </div>
        </div>
    );
};

export default Card;