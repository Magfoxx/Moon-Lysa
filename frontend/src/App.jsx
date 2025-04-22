import React, { use, useState } from "react";

function App() {
  return (
    <div className="bg-green-200 flexCenter max-padd-container">
      <h1 className="mb-5 hover:text-red-500 cursor-pointer">
        Bienvenue sur le site de Moon Lysa
      </h1>
      <p>
        Si vous faite un <b>hover</b> sur le titre et qu'il devient rouge, c'est
        que vous avez bien installé Tailwind CSS.
      </p>
      <div className="bg-green-600 rounded-xl p-5 mt-5 text-white font-bold">
        <p className="!text-left">
          sinon rentrez ces lignes de code dans votre terminal : <br />
          - cd frontend <br />- npm install tailwindcss @tailwindcss/vite
        </p>
      </div>
      <div className="mt-10">
        <p className="!text-left">
          Ce projet utilise un backend en Node.js et Express, et une base de
          données MongoDB. <br />
          Il est conçu pour être utilisé avec le framework React et le
          gestionnaire de paquets npm. <br />
          Il utilise également Tailwind CSS pour le style et Vite pour le
          développement. <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default App;
