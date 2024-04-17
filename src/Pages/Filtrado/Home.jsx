import React, { useState, useContext } from "react";
import { usuarios } from "../../database/usuarios.js";
import { FormularioContext } from "../Context/Context.jsx";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";

const Filtrado = () => {
  const context = useContext(FormularioContext);

  return (
    <div className="min-h-screen flex items-start justify-start bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Opciones de Filtro</h2>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              className="text-left w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={context.filtrarPerdidos}
            >
              Filtrar Estudiantes Perdidos
            </button>
          </li>
          <li>
            <button
              className="text-left w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={context.filtrarGanados}
            >
              Filtrar Estudiantes Ganados
            </button>
          </li>
          <li>
            <input
              type="text"
              placeholder="Documento"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={context.handleFiltroDocumento}
            />
          </li>
          <li>
            <button
              className="text-left w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={context.handleMostrarTodos} // Corregido aquí
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
              onClick={context.handleBorrarTodo} // Corregido aquí
            >
              Borrar Todas las Tarjetas
            </button>
          </li>
        </ul>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {context.mostrarPerdidos && (
          <Card estudiantes={context.estudiantesPerdidos} />
        )}
        {context.mostrarGanados && (
          <Card estudiantes={context.estudiantesGanados} />
        )}
        {context.mostrarTodos && <Card estudiantes={usuarios} />}
        {/* Aquí puedes descomentar el código para mostrar estudiantes filtrados
        {context.estudiantesFiltrados.length > 0 &&
          context.estudiantesFiltrados.map((estudiante, index) => (
            <Card key={index} estudiante={estudiante} />
          ))} */}
      </section>
    </div>
  );
};

export default Filtrado;
