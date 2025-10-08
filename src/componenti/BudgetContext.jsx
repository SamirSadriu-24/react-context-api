import { createContext, useState, useContext } from "react";

const BudgetContext = createContext(); 

export const BudgetProvider = ({children}) => {
    const [budget, impostaBudget] = useState(false);

    return(
        <BudgetContext.Provider value= {{budget, impostaBudget}}>
            {children}
        </BudgetContext.Provider>
    )
}

export function useBudget() {
  return useContext(BudgetContext);
}
