import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a nuestra aplicación CESDE</h1>
      <div className="flex flex-col space-y-4">
        <Link
          to="/sign-in"
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out text-center"
        >
          Llenar Información
        </Link>
        <Link
          to="/filtrar"
          className="bg-black hover:bg- text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out text-center"
        >
          Filtrar
        </Link>
      </div>
    </div>
  );
};

export default Home;