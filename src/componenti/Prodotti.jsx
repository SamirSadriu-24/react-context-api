import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "./BudgetContext";
import BudgetButton from "./BudgetButton"


const Prodotti = () => {
    const { budget } = useBudget();
    const [prodotti, impostaProdotti] = useState([]);
    const [carica, impostaCarica] = useState(true);

    useEffect(() => {
        const Url = "https://fakestoreapi.com/products";
        fetch(Url)
            .then((risposta) => risposta.json())
            .then(data => { impostaProdotti(data); impostaCarica(false) })
            .catch(error => { console.log(error), setLoading(false) });

    }, [])

    if (carica) {
        return <p className="carica">Caricamento prodotti...</p>;
    }

    return (
        <div className="default-link">
            <BudgetButton />
            <div className="card-container">
                {prodotti.filter((prodotto) => {
                    if (budget === false) {
                        return true;
                    } else {
                        return prodotto.price <= 30;
                    }
                })
                    .map((prodotto) => (
                        <div className="card-prodotto" key={prodotto.id}>
                            <div className="card">
                                <div className="card-info">
                                    <img src={prodotto.image} alt={prodotto.title} />
                                    <p className="title">{prodotto.title}</p>
                                    <p> <span className="title">Categoria:</span> {prodotto.category}</p>
                                    {/* <p className="card-description">
                                    {/* <span className="title">Descrizione:
                                    </span> {prodotto.description}</p> */}
                                    {/* <p>{prodotto.price} € </p>
                                </p> */}
                                </div>
                                <div className="card-rating">
                                    <p className="title">Valutazione:</p>
                                    <div className="rating">
                                        <p>Recensioni totali: {prodotto.rating.count}</p>
                                        <p>Stelle: {prodotto.rating.rate} / 5</p>
                                        <div>
                                            <Link to={`/prodotti/${prodotto.id}`}>
                                                Specifiche del prodotto.
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default Prodotti