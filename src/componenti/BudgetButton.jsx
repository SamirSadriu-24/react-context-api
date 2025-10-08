import { useBudget } from "./BudgetContext"

const BudgetButton = () => {
    const { budget, impostaBudget } = useBudget();
    let innerText;

    if (budget === true) {
        innerText = "Disattiva modalità risparmio";
    } else {
        innerText = "Modalità risparmio"
    }


    return (
        <button className="Budget" onClick={() => {
            if (budget === true) {
                impostaBudget(false);
            } else {
                impostaBudget(true);
            }
        }}>
            {innerText}
        </button>
    )
}

export default BudgetButton