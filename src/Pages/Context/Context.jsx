import { createContext,useState } from "react";
import { usuarios } from "../../database/usuarios";

export const FormularioContext = createContext();
export const FormularioProvider = ({ children }) => {
  const [estudiantesPerdidos, setEstudiantesPerdidos] = useState([]);
  const [estudiantesGanados, setEstudiantesGanados] = useState([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [mostrarPerdidos, setMostrarPerdidos] = useState(false);
  const [mostrarGanados, setMostrarGanados] = useState(false);
  const [filtroDocumento, setFiltroDocumento] = useState("");

  const filtrarPerdidos = () => {
    const perdidos = usuarios.filter((usuario) => parseFloat(usuario.nota) < 3);
    setEstudiantesPerdidos(perdidos);
    setMostrarPerdidos(!mostrarPerdidos);
  };

  const filtrarGanados = () => {
    const ganados = usuarios.filter((usuario) => parseFloat(usuario.nota) >= 3);
    setEstudiantesGanados(ganados);
    setMostrarGanados(!mostrarGanados);
  };

  const handleBorrarTodo = () => {
    setEstudiantesPerdidos([]);
    setEstudiantesGanados([]);
    setMostrarTodos(false);
  };
  const handleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos); // Cambiar el estado de mostrarTodos al contrario del valor actual
  };

  const handleFiltroDocumento = (event) => {
    setFiltroDocumento(event.target.value); // Actualiza el estado con el valor del input
  };
  const estudiantesFiltrados = usuarios.filter((estudiante) =>
    estudiante.documento.includes(filtroDocumento)
  );

  return (
    <FormularioContext.Provider value={{
        estudiantesGanados,
        mostrarPerdidos,
        estudiantesPerdidos,
        setEstudiantesPerdidos,
        setEstudiantesGanados,
        mostrarTodos, 
        setMostrarTodos,
        mostrarGanados, 
        setMostrarGanados,
        filtroDocumento, 
        setFiltroDocumento,
        filtrarPerdidos,
        filtrarGanados,
        handleBorrarTodo,
        handleMostrarTodos,        
        handleFiltroDocumento,
        estudiantesFiltrados

    }}>
      {children}
    </FormularioContext.Provider>
  );
};
