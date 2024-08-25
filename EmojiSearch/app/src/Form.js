import React from "react";

export default function Form({ filteredEmojis }) {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Liste des Emojis</h1>
      <ul className="space-y-2">
        {filteredEmojis.length > 0 ? (
          filteredEmojis.map((item, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            >
              <span className="font-medium text-gray-700">{item.title}</span> -{" "}
              <span className="text-lg">{item.symbol}</span>
            </li>
          ))
        ) : (
          <li className="text-red-500">Aucun résultat trouvé</li>
        )}
      </ul>
    </div>
  );
}
