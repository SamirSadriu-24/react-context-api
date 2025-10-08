
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartaProdotto = () => {

    const { id } = useParams();
    const [prodotto, setProdotto] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const URL = `https://fakestoreapi.com/products/${id}`;

        fetch(URL)
            .then((respond) => respond.json())
            .then(data => {
                console.log("Dati API:", data);
                setProdotto(data);
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="container-specifica">
            <div className="card-specifica">
                <div className="card-info-specifica">
                    <img src={prodotto.image} alt={prodotto.title} />
                    <p className="title">{prodotto.title}</p>
                    <p> <span className="title">Categoria:</span> {prodotto.category}</p>
                    <p className="card-description-specifica">
                        <span className="title">Descrizione:
                        </span> {prodotto.description}</p>
                    <p>{prodotto.price} €
                    </p>
                    <button> BUY </button>
                </div>
                <button onClick={() => navigate("/prodotti")}>Torna ai Prodotti </button>
            </div>
        </div>
    )
}

export default CartaProdotto