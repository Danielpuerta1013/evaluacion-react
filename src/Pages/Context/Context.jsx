import { createContext } from "react"


export const FormularioContext = createContext()
export const FormularioProvider = ({ children }) => {  
    

    
    return (
        <FormularioContext.Provider value={{
                        

        }}>
            {children}
        </FormularioContext.Provider>
    )

}