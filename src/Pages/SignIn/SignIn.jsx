import fondo from "../../assets/fondo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { usuarios } from "../../database/usuarios.js";
import "./style.css";

const SignIn = () => {
  const [getNombre, setnombre] = useState("");
  const [getDocumento, setDocumento] = useState("");
  const [getTelefono, setTelefono] = useState("");
  const [getDireccion, setDireccion] = useState("");
  const [getCorreo, setCorreo] = useState("");
  const [getNota, setNota] = useState(0.0);

  const enviarInfo = () => {
    const nuevoUsuario = {
      nombre:getNombre,
      documento:getDocumento,
      telefono:getTelefono,
      direccion:getDireccion,
      correo:getCorreo,
      nota:getNota,
    };
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
  };

  return (
    <div
      id="contenedor"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Formulario de control de estudiantes
          </h2>
          <p className="mt-2 text-center text-sm text-black">
            Completa los campos a continuación
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="nombre" className="sr-only">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="nombre"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nombre"
                onChange={(e) => {
                  setnombre(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="documento" className="sr-only">
                Documento
              </label>
              <input
                id="documento"
                name="documento"
                type="text"
                autoComplete="documento"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Documento"
                onChange={(e) => {
                  setDocumento(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="telefono" className="sr-only">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="text"
                autoComplete="telefono"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Teléfono"
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="direccion" className="sr-only">
                Dirección
              </label>
              <input
                id="direccion"
                name="direccion"
                type="text"
                autoComplete="direccion"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Dirección"
                onChange={(e) => {
                  setDireccion(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="correo" className="sr-only">
                Correo
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="correo"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
                onChange={(e) => {
                  setCorreo(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="nota" className="sr-only">
                Nota Fina
              </label>
              <textarea
                id="nota"
                name="nota"
                autoComplete="nota"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nota Fina"
                onChange={(e) => {
                  setNota(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="button"
              className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={enviarInfo}
            >
              Enviar
            </button>
            <Link to="/">
              <button
                type="button"
                className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                volver al inicio
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
