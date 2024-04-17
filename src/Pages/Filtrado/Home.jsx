import React, { useState } from "react";
import { usuarios } from "../../database/usuarios.js";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";

const Filtrado = () => {
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
    <div className="min-h-screen flex items-start justify-start bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Opciones de Filtro</h2>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              className="text-left w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={filtrarPerdidos}
            >
              Filtrar Estudiantes Perdidos
            </button>
          </li>
          <li>
            <button
              className="text-left w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={filtrarGanados}
            >
              Filtrar Estudiantes Ganados
            </button>
          </li>
          <li>
            <input
              type="text"
              placeholder="Documento"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFiltroDocumento}
            />
          </li>
          <li>
            <button
              className="text-left w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={handleMostrarTodos}
            >
              Mostrar Todos los Estudiantes
            </button>
          </li>
          <li>
            <Link to="/">
              <button className="text-left w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                volver al inicio
              </button>
            </Link>
          </li>
          <li>
            <button
              className="text-left w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={handleBorrarTodo}
            >
              Borrar Todas las Tarjetas
            </button>
          </li>
        </ul>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {mostrarPerdidos && <Card estudiantes={estudiantesPerdidos} />}
        {mostrarGanados && <Card estudiantes={estudiantesGanados} />}
        {mostrarTodos && <Card estudiantes={usuarios} />}
        {/* {estudiantesFiltrados.length > 0 &&
          estudiantesFiltrados.map((estudiante, index) => (
            <Card key={index} estudiante={estudiante} />
          ))} */}
      </section>
    </div>
  );
};

export default Filtrado;
