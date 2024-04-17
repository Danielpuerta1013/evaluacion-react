import React from "react";

const Card = ({ estudiantes }) => {
  return (
    <div>
      {estudiantes.map((estudiante, index) => (
        <div key={index} className="border border-black p-4 mb-4 rounded-md">
          <h3 className="text-lg font-semibold">{estudiante.nombre}</h3>
          <p>
            <strong>Documento:</strong> {estudiante.documento}
          </p>
          <p>
            <strong>Teléfono:</strong> {estudiante.telefono}
          </p>
          <p>
            <strong>Dirección:</strong> {estudiante.direccion}
          </p>
          <p>
            <strong>Correo:</strong> {estudiante.correo}
          </p>
          <p>
            <strong>Nota Final:</strong> {estudiante.nota}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;