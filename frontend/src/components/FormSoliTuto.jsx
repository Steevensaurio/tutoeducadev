import React from "react";

export default function FormSoliTuto() {
  return (
    <>
      <div className="w-full items-center justify-center max-w-3xl bg-blue-500 rounded-3xl overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Solicitud de Nueva Tutoría
          </h1>
        </div>
        <div className="px-6 py-4">
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="tema"
                className="block text-sm font-medium text-gray-700"
              >
                Tema
              </label>
              <input
                id="tema"
                name="tema"
                type="text"
                placeholder="Ingrese el tema de la tutoría"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="modalidad"
                className="block text-sm font-medium text-gray-700"
              >
                Modalidad
              </label>
              <select
                id="modalidad"
                name="modalidad"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona una opción</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="hora"
                className="block text-sm font-medium text-gray-700"
              >
                Hora
              </label>
              <input
                id="hora"
                name="hora"
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="fecha"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
